/**
 * VoiceAct Mock Data - Voice Client
 * Comprehensive mock data for all voice client entities
 */

import type {
  VoiceClient,
  JobPosting,
  Campaign,
  TalentInvitation,
  JobApplication,
  CustomSample,
  ClientStats,
  ClientActivityItem
} from '@/types/voice-client'

// Mock Voice Clients
export const mockVoiceClients: VoiceClient[] = [
  {
    id: 'client-001',
    userId: 'user-client-001',
    companyName: 'TechFlow Inc.',
    contactName: 'Jennifer Martinez',
    email: 'jennifer@techflow.com',
    phone: '+1-555-0100',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    logoUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
    website: 'https://techflow.com',
    location: 'San Francisco, CA',
    timezone: 'America/Los_Angeles',
    industry: 'Technology',
    companySize: 'medium',
    description: 'Innovative tech startup creating the next generation of mobile applications. We focus on user experience and cutting-edge technology.',
    isVerified: true,
    isPublic: true,
    totalJobs: 12,
    activeJobs: 3,
    completedJobs: 9,
    totalSpent: 45000,
    averageRating: 4.7,
    joinedDate: '2023-06-15T10:00:00Z',
    lastActive: '2024-01-15T16:30:00Z',
    socialLinks: {
      website: 'https://techflow.com',
      linkedin: 'techflow-inc',
      twitter: '@techflow'
    },
    preferences: {
      defaultBudget: {
        min: 2000,
        max: 8000,
        currency: 'USD'
      },
      preferredLanguages: ['English'],
      preferredVoiceTypes: ['commercial', 'narrator'],
      autoApprove: false,
      requireNDA: true
    },
    createdAt: '2023-06-15T10:00:00Z',
    updatedAt: '2024-01-15T16:30:00Z'
  },
  {
    id: 'client-002',
    userId: 'user-client-002',
    companyName: 'EduTech Solutions',
    contactName: 'Michael Torres',
    email: 'michael@edutech.com',
    phone: '+1-555-0200',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop',
    website: 'https://edutech.com',
    location: 'Austin, TX',
    timezone: 'America/Chicago',
    industry: 'Education',
    companySize: 'large',
    description: 'Leading provider of educational technology solutions. We create engaging e-learning content for corporate training and academic institutions.',
    isVerified: true,
    isPublic: true,
    totalJobs: 28,
    activeJobs: 5,
    completedJobs: 23,
    totalSpent: 125000,
    averageRating: 4.8,
    joinedDate: '2022-11-20T09:00:00Z',
    lastActive: '2024-01-15T14:20:00Z',
    socialLinks: {
      website: 'https://edutech.com',
      linkedin: 'edutech-solutions'
    },
    preferences: {
      defaultBudget: {
        min: 3000,
        max: 15000,
        currency: 'USD'
      },
      preferredLanguages: ['English', 'Spanish'],
      preferredVoiceTypes: ['narrator', 'e-learning'],
      autoApprove: true,
      requireNDA: false
    },
    createdAt: '2022-11-20T09:00:00Z',
    updatedAt: '2024-01-15T14:20:00Z'
  },
  {
    id: 'client-003',
    userId: 'user-client-003',
    companyName: 'Animation Studios Inc.',
    contactName: 'Sarah Chen',
    email: 'sarah@animationstudios.com',
    phone: '+1-555-0300',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    logoUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
    website: 'https://animationstudios.com',
    location: 'Los Angeles, CA',
    timezone: 'America/Los_Angeles',
    industry: 'Entertainment',
    companySize: 'medium',
    description: 'Creative animation studio specializing in character-driven content for television, streaming, and digital platforms.',
    isVerified: true,
    isPublic: true,
    totalJobs: 18,
    activeJobs: 4,
    completedJobs: 14,
    totalSpent: 85000,
    averageRating: 4.9,
    joinedDate: '2023-02-10T11:00:00Z',
    lastActive: '2024-01-15T12:45:00Z',
    socialLinks: {
      website: 'https://animationstudios.com',
      linkedin: 'animation-studios-inc',
      twitter: '@animationstudios'
    },
    preferences: {
      defaultBudget: {
        min: 5000,
        max: 25000,
        currency: 'USD'
      },
      preferredLanguages: ['English'],
      preferredVoiceTypes: ['character', 'animation'],
      autoApprove: false,
      requireNDA: true
    },
    createdAt: '2023-02-10T11:00:00Z',
    updatedAt: '2024-01-15T12:45:00Z'
  }
]

// Mock Custom Samples for Applications
export const mockClientCustomSamples: CustomSample[] = [
  {
    id: 'client-custom-sample-001',
    applicationId: 'application-001',
    title: 'Tech Commercial Demo',
    description: 'Custom sample showcasing modern, energetic delivery for tech startup commercial.',
    audioUrl: 'https://example.com/audio/client-custom-sample-001.mp3',
    duration: 30,
    fileSize: 480000,
    format: 'mp3',
    isPublic: false,
    tags: ['commercial', 'tech', 'energetic', 'custom'],
    metadata: {
      recordingQuality: 'professional',
      equipment: 'Rode NT1',
      recordingLocation: 'Home Studio',
      dateRecorded: '2024-01-16T10:00:00Z'
    },
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'client-custom-sample-002',
    applicationId: 'application-002',
    title: 'E-Learning Narration Sample',
    description: 'Custom sample demonstrating clear, engaging narration for educational content.',
    audioUrl: 'https://example.com/audio/client-custom-sample-002.mp3',
    duration: 60,
    fileSize: 960000,
    format: 'mp3',
    isPublic: false,
    tags: ['e-learning', 'narration', 'educational', 'custom'],
    metadata: {
      recordingQuality: 'professional',
      equipment: 'Neumann U87',
      recordingLocation: 'Professional Studio',
      dateRecorded: '2024-01-17T14:00:00Z'
    },
    createdAt: '2024-01-17T14:00:00Z',
    updatedAt: '2024-01-17T14:00:00Z'
  }
]

// Mock Job Applications
export const mockJobApplications: JobApplication[] = [
  {
    id: 'application-001',
    jobId: 'job-001',
    voiceActorId: 'va-001',
    voiceActorName: 'Sarah Johnson',
    status: 'under_review',
    appliedDate: '2024-01-16T15:00:00Z',
    proposedRate: 3500,
    proposedCurrency: 'USD',
    proposedTimeline: '1 week',
    estimatedHours: 15,
    portfolioSampleIds: ['sample-001', 'sample-002'],
    customSamples: [mockClientCustomSamples[0]],
    coverLetter: 'I\'d love to work on this tech startup commercial series. My energetic, modern delivery style would be perfect for your target demographic. I can deliver all 5 spots within a week and have extensive experience with tech brands.',
    relevantExperience: '5+ years of commercial voice work, including tech startups and mobile apps. Recent clients include similar companies in the fintech and SaaS space.',
    createdAt: '2024-01-16T15:00:00Z',
    updatedAt: '2024-01-16T15:00:00Z'
  },
  {
    id: 'application-002',
    jobId: 'job-002',
    voiceActorId: 'va-003',
    voiceActorName: 'Emma Rodriguez',
    status: 'shortlisted',
    appliedDate: '2024-01-15T11:00:00Z',
    reviewedDate: '2024-01-16T09:00:00Z',
    proposedRate: 3200,
    proposedCurrency: 'USD',
    proposedTimeline: '2 weeks',
    estimatedHours: 20,
    portfolioSampleIds: ['sample-001'],
    customSamples: [mockClientCustomSamples[1]],
    coverLetter: 'I have extensive experience with e-learning content and can deliver clear, engaging narration that keeps learners engaged throughout the 45-minute module. My bilingual capabilities could also be valuable for future projects.',
    relevantExperience: 'Specialized in educational content with over 3 years of e-learning narration experience. Worked with major corporate training companies.',
    clientRating: 4.8,
    clientFeedback: 'Excellent samples and competitive pricing. Emma\'s experience with educational content is exactly what we need.',
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-01-16T09:00:00Z'
  },
  {
    id: 'application-003',
    jobId: 'job-003',
    voiceActorId: 'va-002',
    voiceActorName: 'Marcus Chen',
    status: 'selected',
    appliedDate: '2024-01-14T14:00:00Z',
    reviewedDate: '2024-01-15T10:00:00Z',
    proposedRate: 12000,
    proposedCurrency: 'USD',
    proposedTimeline: '2-3 weeks',
    estimatedHours: 35,
    portfolioSampleIds: ['sample-003'],
    customSamples: [],
    coverLetter: 'I\'m very excited about this animated series project! I have extensive experience with character voices and animation work. I can bring the perfect blend of adventure and humor to this character.',
    relevantExperience: '8+ years of animation voice work, including lead characters in animated series. Known for versatile character development and comedic timing.',
    clientRating: 4.9,
    clientFeedback: 'Perfect fit for our character! Marcus brings exactly the energy and versatility we were looking for.',
    createdAt: '2024-01-14T14:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  }
]

// Mock Job Postings
export const mockJobPostings: JobPosting[] = [
  {
    id: 'job-001',
    clientId: 'client-001',
    clientName: 'TechFlow Inc.',
    title: 'Tech Startup Commercial Series',
    description: 'Series of 5 commercials for a new tech startup launching their mobile app. Need energetic, modern voice that appeals to millennials and Gen Z.',
    projectType: 'commercial',
    status: 'active',
    priority: 'high',
    budget: {
      min: 2000,
      max: 5000,
      currency: 'USD'
    },
    deadline: '2024-02-15T17:00:00Z',
    startDate: '2024-01-20T09:00:00Z',
    estimatedDuration: '1-2 weeks',
    requirements: {
      languages: ['English'],
      accents: ['American'],
      voiceTypes: ['commercial'],
      ageRange: '25-35',
      gender: 'any',
      experience: 'professional',
      specialInstructions: 'Energetic, modern tone. Appeal to 25-35 age demographic. Tech-savvy and confident delivery.',
      quality: 'professional'
    },
    deliverables: [
      {
        id: 'deliverable-001',
        jobId: 'job-001',
        title: 'Final Commercial Audio Files',
        description: '5 completed commercial spots, mixed and mastered',
        type: 'final_audio',
        status: 'pending',
        dueDate: '2024-02-15T17:00:00Z',
        files: [],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
      }
    ],
    files: [
      {
        id: 'file-001',
        jobId: 'job-001',
        title: 'Commercial Script v2.1',
        type: 'script',
        fileUrl: 'https://example.com/files/techflow-script.pdf',
        fileName: 'techflow_commercial_script_v2.1.pdf',
        fileSize: 245760,
        description: 'Final script for all 5 commercials',
        uploadedBy: 'client-001',
        uploadedDate: '2024-01-15T08:00:00Z',
        isPublic: false,
        createdAt: '2024-01-15T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z'
      }
    ],
    campaignId: 'campaign-001',
    isPublic: true,
    applications: [mockJobApplications[0]],
    selectedTalents: [],
    totalApplications: 1,
    viewCount: 45,
    createdDate: '2024-01-15T10:00:00Z',
    publishedDate: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T15:00:00Z'
  },
  {
    id: 'job-002',
    clientId: 'client-002',
    clientName: 'EduTech Solutions',
    title: 'Educational E-Learning Module',
    description: 'Voice-over for a 45-minute e-learning module about digital marketing. Need clear, engaging narration with occasional character voices for examples.',
    projectType: 'e-learning',
    status: 'active',
    priority: 'medium',
    budget: {
      min: 2000,
      max: 4000,
      currency: 'USD'
    },
    deadline: '2024-01-30T17:00:00Z',
    startDate: '2024-01-22T09:00:00Z',
    estimatedDuration: '2-3 weeks',
    requirements: {
      languages: ['English'],
      accents: ['American'],
      voiceTypes: ['narrator', 'character'],
      experience: 'advanced',
      specialInstructions: 'Clear, engaging delivery. Occasional character voices for examples. Must maintain energy throughout 45-minute duration.',
      quality: 'professional'
    },
    deliverables: [
      {
        id: 'deliverable-002',
        jobId: 'job-002',
        title: 'Complete E-Learning Audio',
        description: '45-minute narrated e-learning module with character voices',
        type: 'final_audio',
        status: 'pending',
        dueDate: '2024-01-30T17:00:00Z',
        files: [],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z'
      }
    ],
    files: [
      {
        id: 'file-002',
        jobId: 'job-002',
        title: 'E-Learning Script',
        type: 'script',
        fileUrl: 'https://example.com/files/edutech-script.pdf',
        fileName: 'digital_marketing_script.pdf',
        fileSize: 512000,
        description: 'Complete script for 45-minute e-learning module',
        uploadedBy: 'client-002',
        uploadedDate: '2024-01-15T08:00:00Z',
        isPublic: false,
        createdAt: '2024-01-15T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z'
      }
    ],
    campaignId: 'campaign-002',
    isPublic: true,
    applications: [mockJobApplications[1]],
    selectedTalents: ['va-003'],
    totalApplications: 1,
    viewCount: 32,
    createdDate: '2024-01-15T10:00:00Z',
    publishedDate: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T09:00:00Z'
  },
  {
    id: 'job-003',
    clientId: 'client-003',
    clientName: 'Animation Studios Inc.',
    title: 'Animated Series - Lead Character',
    description: 'Seeking a versatile voice actor for the lead character in a new animated series. Character is a 25-year-old adventurer with a sense of humor and quick wit.',
    projectType: 'animation',
    status: 'completed',
    priority: 'high',
    budget: {
      min: 8000,
      max: 12000,
      currency: 'USD'
    },
    deadline: '2024-02-01T17:00:00Z',
    startDate: '2024-01-10T09:00:00Z',
    estimatedDuration: '2-3 weeks',
    requirements: {
      languages: ['English'],
      accents: ['American'],
      voiceTypes: ['character', 'animation'],
      ageRange: '25-35',
      gender: 'any',
      experience: 'professional',
      specialInstructions: 'Must be able to convey humor, adventure, and emotional depth. Character has comedic timing and dramatic moments.',
      quality: 'broadcast'
    },
    deliverables: [
      {
        id: 'deliverable-003',
        jobId: 'job-003',
        title: 'Character Voice Recordings',
        description: 'Complete voice recordings for 6 episodes',
        type: 'final_audio',
        status: 'completed',
        dueDate: '2024-02-01T17:00:00Z',
        completedDate: '2024-01-28T16:00:00Z',
        files: ['https://example.com/deliverables/animation-episodes.zip'],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-28T16:00:00Z'
      }
    ],
    files: [
      {
        id: 'file-003',
        jobId: 'job-003',
        title: 'Character Bible',
        type: 'reference',
        fileUrl: 'https://example.com/files/character-bible.pdf',
        fileName: 'adventurer_character_bible.pdf',
        fileSize: 1024000,
        description: 'Character background, personality, and voice direction',
        uploadedBy: 'client-003',
        uploadedDate: '2024-01-15T08:00:00Z',
        isPublic: false,
        createdAt: '2024-01-15T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z'
      }
    ],
    campaignId: 'campaign-003',
    isPublic: true,
    applications: [mockJobApplications[2]],
    selectedTalents: ['va-002'],
    totalApplications: 1,
    viewCount: 78,
    createdDate: '2024-01-15T10:00:00Z',
    publishedDate: '2024-01-15T10:00:00Z',
    closedDate: '2024-01-28T16:00:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-28T16:00:00Z'
  }
]

// Mock Talent Invitations
export const mockTalentInvitations: TalentInvitation[] = [
  {
    id: 'invitation-001',
    campaignId: 'campaign-001',
    jobId: 'job-001',
    clientId: 'client-001',
    clientName: 'TechFlow Inc.',
    voiceActorId: 'va-001',
    voiceActorName: 'Sarah Johnson',
    status: 'responded',
    message: 'Hi Sarah! We\'re launching a new tech startup and would love to work with you on our commercial series. Your commercial samples are exactly what we\'re looking for - energetic and modern. Would you be interested?',
    customOffer: {
      rate: 4000,
      currency: 'USD',
      timeline: '1 week',
      specialTerms: 'Priority project with potential for ongoing work'
    },
    sentDate: '2024-01-15T10:00:00Z',
    respondedDate: '2024-01-16T15:00:00Z',
    response: {
      status: 'accepted',
      message: 'Thank you for the invitation! I\'d love to work on this project. I\'ve submitted my application with a custom sample.'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T15:00:00Z'
  },
  {
    id: 'invitation-002',
    campaignId: 'campaign-002',
    jobId: 'job-002',
    clientId: 'client-002',
    clientName: 'EduTech Solutions',
    voiceActorId: 'va-003',
    voiceActorName: 'Emma Rodriguez',
    status: 'responded',
    message: 'Hi Emma! We have an exciting e-learning project that would be perfect for your educational content expertise. The module is about digital marketing and we need someone who can keep learners engaged for 45 minutes.',
    customOffer: {
      rate: 3500,
      currency: 'USD',
      timeline: '2 weeks',
      specialTerms: 'Potential for additional modules if this goes well'
    },
    sentDate: '2024-01-15T10:00:00Z',
    respondedDate: '2024-01-15T11:00:00Z',
    response: {
      status: 'accepted',
      message: 'This sounds perfect! I have extensive experience with e-learning content and would love to work on this project.'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T11:00:00Z'
  },
  {
    id: 'invitation-003',
    campaignId: 'campaign-003',
    jobId: 'job-003',
    clientId: 'client-003',
    clientName: 'Animation Studios Inc.',
    voiceActorId: 'va-002',
    voiceActorName: 'Marcus Chen',
    status: 'responded',
    message: 'Hi Marcus! We\'re developing a new animated series and your character voice work is exactly what we need. The lead character is a 25-year-old adventurer with great comedic timing.',
    customOffer: {
      rate: 10000,
      currency: 'USD',
      timeline: '2-3 weeks',
      specialTerms: 'Lead character role with potential for series continuation'
    },
    sentDate: '2024-01-15T10:00:00Z',
    respondedDate: '2024-01-14T14:00:00Z',
    response: {
      status: 'accepted',
      message: 'I\'m very excited about this project! I love character work and this sounds like a fantastic opportunity.'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-14T14:00:00Z'
  }
]

// Mock Campaigns
export const mockCampaigns: Campaign[] = [
  {
    id: 'campaign-001',
    clientId: 'client-001',
    name: 'TechFlow Commercial Launch',
    description: 'Campaign to find the perfect voice for our tech startup commercial series. Need energetic, modern voice that appeals to millennials.',
    type: 'fill_asap',
    status: 'active',
    targetAudience: {
      languages: ['English'],
      accents: ['American'],
      voiceTypes: ['commercial'],
      experience: ['professional'],
      location: ['United States'],
      availability: ['available'],
      minRating: 4.5,
      maxRate: 200,
      isVerified: true,
      customCriteria: 'Tech-savvy, modern delivery style'
    },
    budget: {
      total: 10000,
      spent: 4000,
      currency: 'USD'
    },
    timeline: {
      startDate: '2024-01-15T10:00:00Z',
      endDate: '2024-02-15T17:00:00Z',
      duration: '1 month'
    },
    jobs: ['job-001'],
    invitations: [mockTalentInvitations[0]],
    metrics: {
      totalViews: 45,
      totalApplications: 1,
      totalInvitations: 1,
      responseRate: 100,
      conversionRate: 100,
      averageResponseTime: 1.2,
      topPerformingJobs: ['job-001'],
      talentEngagement: {
        views: 45,
        applications: 1,
        shortlists: 1,
        hires: 0
      }
    },
    settings: {
      autoApprove: false,
      requirePortfolio: true,
      requireCustomSample: true,
      allowMultipleApplications: false,
      notificationFrequency: 'immediate',
      privacyLevel: 'public',
      ndaRequired: true,
      contractTemplate: 'techflow-standard-contract'
    },
    createdDate: '2024-01-15T10:00:00Z',
    launchedDate: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T15:00:00Z'
  },
  {
    id: 'campaign-002',
    clientId: 'client-002',
    name: 'E-Learning Content Expansion',
    description: 'Targeted campaign to find experienced e-learning narrators for our expanding educational content library.',
    type: 'invite_specific',
    status: 'active',
    targetAudience: {
      languages: ['English', 'Spanish'],
      accents: ['American'],
      voiceTypes: ['narrator', 'e-learning'],
      experience: ['advanced', 'professional'],
      location: ['United States'],
      availability: ['available'],
      minRating: 4.0,
      maxRate: 150,
      isVerified: true,
      customCriteria: 'Experience with educational content preferred'
    },
    budget: {
      total: 20000,
      spent: 3500,
      currency: 'USD'
    },
    timeline: {
      startDate: '2024-01-15T10:00:00Z',
      endDate: '2024-03-15T17:00:00Z',
      duration: '2 months'
    },
    jobs: ['job-002'],
    invitations: [mockTalentInvitations[1]],
    metrics: {
      totalViews: 32,
      totalApplications: 1,
      totalInvitations: 1,
      responseRate: 100,
      conversionRate: 100,
      averageResponseTime: 0.04,
      topPerformingJobs: ['job-002'],
      talentEngagement: {
        views: 32,
        applications: 1,
        shortlists: 1,
        hires: 1
      }
    },
    settings: {
      autoApprove: true,
      requirePortfolio: true,
      requireCustomSample: false,
      allowMultipleApplications: true,
      notificationFrequency: 'daily',
      privacyLevel: 'public',
      ndaRequired: false
    },
    createdDate: '2024-01-15T10:00:00Z',
    launchedDate: '2024-01-15T10:00:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T09:00:00Z'
  },
  {
    id: 'campaign-003',
    clientId: 'client-003',
    name: 'Animated Series Casting',
    description: 'Exclusive campaign to find the perfect voice for our lead character in a new animated series. Looking for versatile character actors.',
    type: 'custom',
    status: 'completed',
    targetAudience: {
      languages: ['English'],
      accents: ['American'],
      voiceTypes: ['character', 'animation'],
      experience: ['professional'],
      location: ['United States'],
      availability: ['available'],
      minRating: 4.5,
      maxRate: 300,
      isVerified: true,
      customCriteria: 'Character voice experience, comedic timing, emotional range'
    },
    budget: {
      total: 15000,
      spent: 10000,
      currency: 'USD'
    },
    timeline: {
      startDate: '2024-01-15T10:00:00Z',
      endDate: '2024-01-28T17:00:00Z',
      duration: '2 weeks'
    },
    jobs: ['job-003'],
    invitations: [mockTalentInvitations[2]],
    metrics: {
      totalViews: 78,
      totalApplications: 1,
      totalInvitations: 1,
      responseRate: 100,
      conversionRate: 100,
      averageResponseTime: 0.17,
      topPerformingJobs: ['job-003'],
      talentEngagement: {
        views: 78,
        applications: 1,
        shortlists: 1,
        hires: 1
      }
    },
    settings: {
      autoApprove: false,
      requirePortfolio: true,
      requireCustomSample: true,
      allowMultipleApplications: false,
      notificationFrequency: 'immediate',
      privacyLevel: 'invite_only',
      ndaRequired: true,
      contractTemplate: 'animation-series-contract'
    },
    createdDate: '2024-01-15T10:00:00Z',
    launchedDate: '2024-01-15T10:00:00Z',
    completedDate: '2024-01-28T16:00:00Z',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-28T16:00:00Z'
  }
]

// Mock Client Stats
export const mockClientStats: ClientStats = {
  totalJobs: 12,
  activeJobs: 3,
  completedJobs: 9,
  totalSpent: 45000,
  monthlySpent: 8500,
  averageJobValue: 3750,
  totalApplications: 15,
  pendingApplications: 2,
  hiredTalents: 8,
  averageRating: 4.7,
  activeCampaigns: 2,
  recentActivity: [
    {
      id: 'client-activity-001',
      type: 'application',
      title: 'New Application Received',
      description: 'Sarah Johnson applied to "Tech Startup Commercial Series"',
      timestamp: '2024-01-16T15:00:00Z',
      status: 'pending',
      url: '/client/jobs/job-001/applications'
    },
    {
      id: 'client-activity-002',
      type: 'job',
      title: 'Job Completed',
      description: 'Successfully completed "Animated Series - Lead Character" project',
      timestamp: '2024-01-28T16:00:00Z',
      status: 'completed',
      url: '/client/jobs/job-003'
    },
    {
      id: 'client-activity-003',
      type: 'campaign',
      title: 'Campaign Launched',
      description: 'Launched "TechFlow Commercial Launch" campaign',
      timestamp: '2024-01-15T10:00:00Z',
      status: 'active',
      url: '/client/campaigns/campaign-001'
    },
    {
      id: 'client-activity-004',
      type: 'invitation',
      title: 'Talent Invitation Sent',
      description: 'Invited Sarah Johnson to "Tech Startup Commercial Series"',
      timestamp: '2024-01-15T10:00:00Z',
      status: 'sent',
      url: '/client/invitations'
    }
  ]
}

// Export all mock data
export const mockClientData = {
  voiceClients: mockVoiceClients,
  jobPostings: mockJobPostings,
  campaigns: mockCampaigns,
  talentInvitations: mockTalentInvitations,
  jobApplications: mockJobApplications,
  customSamples: mockClientCustomSamples,
  clientStats: mockClientStats
}
