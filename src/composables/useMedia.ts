import { ref, computed, readonly } from 'vue'
import { useResourceService } from '@/composables/useResourceService'
import { useToast } from '@/composables/useToast'

export interface PaginatedResponse<T> {
  /** Array of media items */
  data: T[]
  /** Pagination metadata */
  pagination: {
    /** Current page number */
    page: number
    /** Number of items per page */
    limit: number
    /** Total number of items */
    total: number
    /** Total number of pages */
    totalPages: number
  }
}

export interface MediaItem {
  /** Unique identifier */
  id: string
  /** Media type (e.g., 'video', 'audio', 'image') */
  type: string
  /** File format (e.g., 'mp4', 'png', 'mp3') */
  format: string
  /** URL to access the media file */
  fileUrl: string
  /** Original filename */
  fileName: string
  /** File size in bytes (optional) */
  fileSize?: number
  /** Duration in seconds for audio/video (optional) */
  duration?: number
  /** MIME content type */
  contentType: string
  /** Processing status (optional) */
  status?: string
  /** Language code (optional) */
  language?: string
  /** Upload URL for direct uploads (optional) */
  uploadUrl?: string
  /** Upload URL expiration timestamp (optional) */
  uploadExpiresAt?: string | Date
  /** Storage bucket name (optional) */
  bucket?: string
  /** Storage path (optional) */
  path?: string
}

/**
 * Transform raw API response to standardized paginated response format
 * @param response - Raw API response
 * @returns Standardized paginated response
 */
function transformPaginatedResponse<T>(response: unknown): PaginatedResponse<T> {
  const payload = (response as Record<string, unknown>) || {}
  const pg = (payload.pagination as Record<string, unknown>) || {}
  const page = Number(pg.page ?? payload.page ?? 1) || 1
  const limit = Number(pg.limit ?? payload.limit ?? 20) || 20
  const total = Number(pg.total ?? payload.total ?? 0) || 0
  const totalPages =
    Number(pg.totalPages ?? payload.totalPages ?? Math.ceil(total / (limit || 1))) ||
    Math.max(1, Math.ceil(total / (limit || 1)))

  return {
    data: ((payload.data as T[]) || []) as T[],
    pagination: { page, limit, total, totalPages },
  }
}

export function useMedia() {
  const { list, create, update } = useResourceService()
  const { push } = useToast()

  const media = ref<MediaItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const totalPages = ref(0)

  /**
   * Computed boolean indicating if there are media items
   */
  const hasMedia = computed(() => media.value.length > 0)

  /**
   * Computed boolean indicating if on the first page
   */
  const isFirstPage = computed(() => currentPage.value <= 1)

  /**
   * Computed boolean indicating if on the last page
   */
  const isLastPage = computed(() => currentPage.value >= totalPages.value)

  /**
   * Fetch media items with optional search and filtering
   * @param options - Search and filter options
   *
   * @example
   * ```typescript
   * // Fetch all media
   * await media.fetchMedia();
   *
   * // Search for specific media
   * await media.fetchMedia({ search: 'video' });
   *
   * // Filter by type and status
   * await media.fetchMedia({
   *   filters: { type: 'video', status: 'processed' }
   * });
   * ```
   */
  const fetchMedia = async (options?: { search?: string; filters?: Record<string, unknown> }) => {
    try {
      loading.value = true
      error.value = null
      const params: Record<string, unknown> = {
        page: currentPage.value,
        limit: 20,
      }
      if (options?.search) params.search = options.search
      if (options?.filters) Object.assign(params, options.filters)

      const raw = await list('media', params)
      const result: PaginatedResponse<MediaItem> = transformPaginatedResponse<MediaItem>(raw)
      media.value = result.data
      totalPages.value = result.pagination.totalPages
    } catch (err: unknown) {
      const message = (err as Error)?.message || 'Failed to fetch media'
      error.value = message
      push({
        id: `${Date.now()}-media-fetch` as string,
        type: 'error',
        title: 'Failed to load media',
        body: message,
        position: 'tr',
        timeout: 6000,
      })
    } finally {
      loading.value = false
    }
  }

  const nextPage = async () => {
    if (isLastPage.value) return
    currentPage.value += 1
    await fetchMedia()
  }

  const previousPage = async () => {
    if (isFirstPage.value) return
    currentPage.value -= 1
    await fetchMedia()
  }

  async function createMediaRecord(params: {
    fileName: string
    contentType: string
    fileSize?: number
    duration?: number
    type: string // domain-specific (e.g., poster, trailer, dubbed)
    format: string // extension-like (e.g., mp4, png)
    language?: string
    description?: string
    tags?: string[]
    relationships?: string[] // ["entityType:entityId:relationshipType"]
    metadata?: Record<string, unknown>
  }): Promise<MediaItem> {
    const payload = {
      ...params,
      tags: params.tags || [],
      relationships: params.relationships || [],
      metadata: params.metadata || {},
    }
    return (await create('media', payload)) as MediaItem
  }

  async function uploadFileToSignedUrl(options: {
    uploadUrl: string
    file: File | Blob
    contentType: string
    onProgress?: (percent: number) => void
  }): Promise<Response> {
    const { uploadUrl, file, contentType } = options
    return await fetch(uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': contentType },
      body: file,
    })
  }

  async function uploadViaMediaResource(
    file: File,
    opts: {
      type?: string
      format?: string
      language?: string
      description?: string
      tags?: string[]
      relationships?: string[]
      metadata?: Record<string, unknown>
      duration?: number
      markCompleted?: boolean
    } = {},
  ): Promise<{ media: MediaItem; fileUrl: string }> {
    const type = opts.type || 'poster'
    const extension = (file.name.split('.').pop() || '').toLowerCase()
    const format = (opts.format || extension || 'bin').toLowerCase()
    const contentType = file.type || 'application/octet-stream'

    const mediaRecord = await createMediaRecord({
      fileName: file.name,
      contentType,
      fileSize: file.size,
      duration: opts.duration,
      type,
      format,
      language: opts.language,
      description: opts.description,
      tags: opts.tags,
      relationships: opts.relationships,
      metadata: opts.metadata,
    })

    if (!mediaRecord.uploadUrl) {
      throw new Error('Upload URL missing from media record')
    }

    const res = await uploadFileToSignedUrl({
      uploadUrl: mediaRecord.uploadUrl,
      file,
      contentType,
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(`Upload failed (${res.status}): ${text.slice(0, 160)}`)
    }

    try {
      await update('media', mediaRecord.id, {
        status: 'completed',
        fileSize: file.size,
      })
    } catch (err: unknown) {
      const message = (err as Error)?.message || 'Failed to complete upload'
      push({
        id: `${Date.now()}-media-complete` as string,
        type: 'error',
        title: 'Upload completion failed',
        body: message,
        position: 'tr',
        timeout: 6000,
      })
    }

    return { media: mediaRecord, fileUrl: mediaRecord.fileUrl }
  }

  return {
    media: readonly(media),
    loading: readonly(loading),
    error: readonly(error),
    currentPage: readonly(currentPage),
    totalPages: readonly(totalPages),
    hasMedia,
    isFirstPage,
    isLastPage,
    fetchMedia,
    nextPage,
    previousPage,
    uploadViaMediaResource,
  }
}
