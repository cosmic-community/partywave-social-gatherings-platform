import { Host, Guest, Event, Category } from '@/types';

// Sample hosts data
export const sampleHosts: Host[] = [
  {
    id: 'host-1',
    slug: 'maya-creative',
    title: 'Maya Patel',
    type: 'hosts',
    created_at: '2024-01-15T00:00:00Z',
    modified_at: '2024-01-15T00:00:00Z',
    metadata: {
      email: 'maya@partywave.app',
      phone: '+1234567890',
      bio: 'Creative curator specializing in immersive art experiences and cultural events. 5+ years organizing unique gatherings.',
      avatar: {
        url: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=200&h=200&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=200&h=200&fit=crop&auto=format,compress'
      },
      verification_status: 'verified',
      total_events: 12,
      average_rating: 4.8,
      joined_date: '2024-01-15T00:00:00Z',
      social_links: {
        instagram: '@mayacreates',
        twitter: '@mayapatel'
      }
    }
  },
  {
    id: 'host-2',
    slug: 'alex-wellness',
    title: 'Alex Chen',
    type: 'hosts',
    created_at: '2024-01-20T00:00:00Z',
    modified_at: '2024-01-20T00:00:00Z',
    metadata: {
      email: 'alex@partywave.app',
      phone: '+1234567891',
      bio: 'Wellness coach and mindfulness expert. Creating healing spaces for modern souls seeking connection and growth.',
      avatar: {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format,compress'
      },
      verification_status: 'verified',
      total_events: 8,
      average_rating: 4.9,
      joined_date: '2024-01-20T00:00:00Z',
      social_links: {
        instagram: '@alexwellness',
        linkedin: 'alex-chen-wellness'
      }
    }
  },
  {
    id: 'host-3',
    slug: 'zoe-music',
    title: 'Zoe Rodriguez',
    type: 'hosts',
    created_at: '2024-02-01T00:00:00Z',
    modified_at: '2024-02-01T00:00:00Z',
    metadata: {
      email: 'zoe@partywave.app',
      phone: '+1234567892',
      bio: 'Music producer and DJ curating intimate listening sessions and underground music experiences for true music lovers.',
      avatar: {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format,compress'
      },
      verification_status: 'verified',
      total_events: 15,
      average_rating: 4.7,
      joined_date: '2024-02-01T00:00:00Z',
      social_links: {
        instagram: '@zoemusic',
        twitter: '@zoesounds'
      }
    }
  }
];

// Sample guests data
export const sampleGuests: Guest[] = [
  {
    id: 'guest-1',
    slug: 'jordan-creative',
    title: 'Jordan Kim',
    type: 'guests',
    created_at: '2024-01-25T00:00:00Z',
    modified_at: '2024-01-25T00:00:00Z',
    metadata: {
      email: 'jordan@example.com',
      phone: '+1234567893',
      bio: 'Design enthusiast and creative soul. Always looking for inspiring experiences and meaningful connections.',
      avatar: {
        url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format,compress'
      },
      age_range: '26-30',
      interests: ['art', 'design', 'music', 'wellness'],
      joined_date: '2024-01-25T00:00:00Z',
      total_bookings: 3,
      preferred_categories: ['social', 'workshops']
    }
  },
  {
    id: 'guest-2',
    slug: 'sam-wellness',
    title: 'Sam Davis',
    type: 'guests',
    created_at: '2024-01-28T00:00:00Z',
    modified_at: '2024-01-28T00:00:00Z',
    metadata: {
      email: 'sam@example.com',
      bio: 'Wellness seeker and mindfulness practitioner. Passionate about personal growth and authentic community building.',
      age_range: '31-35',
      interests: ['wellness', 'meditation', 'yoga', 'networking'],
      joined_date: '2024-01-28T00:00:00Z',
      total_bookings: 5,
      preferred_categories: ['wellness', 'networking']
    }
  },
  {
    id: 'guest-3',
    slug: 'riley-music',
    title: 'Riley Johnson',
    type: 'guests',
    created_at: '2024-02-02T00:00:00Z',
    modified_at: '2024-02-02T00:00:00Z',
    metadata: {
      email: 'riley@example.com',
      bio: 'Music lover and vinyl collector. Always on the hunt for new sounds and underground music scenes.',
      age_range: '18-25',
      interests: ['music', 'vinyl', 'concerts', 'culture'],
      joined_date: '2024-02-02T00:00:00Z',
      total_bookings: 7,
      preferred_categories: ['music', 'social']
    }
  }
];

// Sample categories
export const sampleCategories: Category[] = [
  {
    id: 'cat-1',
    slug: 'social',
    title: 'Social',
    type: 'categories',
    created_at: '2024-01-01T00:00:00Z',
    modified_at: '2024-01-01T00:00:00Z',
    metadata: {
      description: 'Casual hangouts, themed parties, and social mixers',
      color: '#10B981',
      icon: '🎉',
      tier: 'green',
      price_range: {
        min: 10,
        max: 30
      }
    }
  },
  {
    id: 'cat-2',
    slug: 'workshops',
    title: 'Workshops',
    type: 'categories',
    created_at: '2024-01-01T00:00:00Z',
    modified_at: '2024-01-01T00:00:00Z',
    metadata: {
      description: 'Skill-building sessions, creative workshops, and learning experiences',
      color: '#3B82F6',
      icon: '🎨',
      tier: 'blue',
      price_range: {
        min: 25,
        max: 75
      }
    }
  },
  {
    id: 'cat-3',
    slug: 'music',
    title: 'Music',
    type: 'categories',
    created_at: '2024-01-01T00:00:00Z',
    modified_at: '2024-01-01T00:00:00Z',
    metadata: {
      description: 'Listening sessions, concerts, and music discovery events',
      color: '#8B5CF6',
      icon: '🎵',
      tier: 'blue',
      price_range: {
        min: 20,
        max: 60
      }
    }
  },
  {
    id: 'cat-4',
    slug: 'wellness',
    title: 'Wellness',
    type: 'categories',
    created_at: '2024-01-01T00:00:00Z',
    modified_at: '2024-01-01T00:00:00Z',
    metadata: {
      description: 'Yoga, meditation, breathwork, and healing circles',
      color: '#06B6D4',
      icon: '🧘',
      tier: 'blue',
      price_range: {
        min: 15,
        max: 50
      }
    }
  },
  {
    id: 'cat-5',
    slug: 'networking',
    title: 'Networking',
    type: 'categories',
    created_at: '2024-01-01T00:00:00Z',
    modified_at: '2024-01-01T00:00:00Z',
    metadata: {
      description: 'Professional meetups, entrepreneur gatherings, and career connections',
      color: '#F59E0B',
      icon: '🤝',
      tier: 'gold',
      price_range: {
        min: 30,
        max: 100
      }
    }
  },
  {
    id: 'cat-6',
    slug: 'premium',
    title: 'Premium',
    type: 'categories',
    created_at: '2024-01-01T00:00:00Z',
    modified_at: '2024-01-01T00:00:00Z',
    metadata: {
      description: 'Exclusive experiences, luxury gatherings, and VIP events',
      color: '#EF4444',
      icon: '✨',
      tier: 'gold',
      price_range: {
        min: 75,
        max: 300
      }
    }
  }
];

// Sample events
export const sampleEvents: Event[] = [
  {
    id: 'event-1',
    slug: 'immersive-art-experience',
    title: 'Immersive Art Experience',
    type: 'events',
    created_at: '2024-01-16T00:00:00Z',
    modified_at: '2024-01-16T00:00:00Z',
    metadata: {
      description: 'Step into a world where digital art meets physical space. Experience interactive installations, vibrant projections, and collaborative art creation in this 3-hour immersive journey.',
      host: sampleHosts[0],
      category: 'social',
      date: '2024-03-15',
      time: '19:00',
      location: {
        address: '123 Creative District',
        city: 'San Francisco',
        coordinates: {
          lat: 37.7749,
          lng: -122.4194
        }
      },
      images: [
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
          imgix_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format,compress'
        }
      ],
      featured_image: {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format,compress'
      },
      ticket_price: 25,
      max_guests: 20,
      current_guests: 8,
      status: 'published',
      tags: ['art', 'digital', 'interactive', 'creative'],
      requirements: 'Comfortable clothing, open mind',
      what_to_expect: 'Interactive art installations, creative collaboration, light refreshments',
      minimum_age: 18
    }
  },
  {
    id: 'event-2',
    slug: 'mindful-morning-circle',
    title: 'Mindful Morning Circle',
    type: 'events',
    created_at: '2024-01-21T00:00:00Z',
    modified_at: '2024-01-21T00:00:00Z',
    metadata: {
      description: 'Start your weekend with intention. Join our intimate morning circle for guided meditation, breathwork, and mindful connection with like-minded souls.',
      host: sampleHosts[1],
      category: 'wellness',
      date: '2024-03-16',
      time: '08:30',
      location: {
        address: '456 Zen Garden Plaza',
        city: 'Los Angeles',
        coordinates: {
          lat: 34.0522,
          lng: -118.2437
        }
      },
      featured_image: {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format,compress'
      },
      ticket_price: 18,
      max_guests: 12,
      current_guests: 5,
      status: 'published',
      tags: ['meditation', 'breathwork', 'mindfulness', 'morning'],
      requirements: 'Yoga mat, water bottle',
      what_to_expect: '90 minutes of guided meditation, breathwork, and sharing circle',
      minimum_age: 21
    }
  },
  {
    id: 'event-3',
    slug: 'underground-vinyl-session',
    title: 'Underground Vinyl Session',
    type: 'events',
    created_at: '2024-02-02T00:00:00Z',
    modified_at: '2024-02-02T00:00:00Z',
    metadata: {
      description: 'Discover rare gems and underground classics in this intimate vinyl listening session. Bring your favorite record to share and explore new sounds together.',
      host: sampleHosts[2],
      category: 'music',
      date: '2024-03-17',
      time: '20:00',
      location: {
        address: '789 Underground Ave',
        city: 'New York',
        coordinates: {
          lat: 40.7128,
          lng: -74.0060
        }
      },
      featured_image: {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&auto=format,compress'
      },
      ticket_price: 22,
      max_guests: 15,
      current_guests: 11,
      status: 'published',
      tags: ['vinyl', 'music', 'underground', 'listening'],
      requirements: 'Optional: bring a vinyl record to share',
      what_to_expect: '2 hours of curated music, vinyl trading, craft cocktails',
      minimum_age: 21
    }
  },
  {
    id: 'event-4',
    slug: 'creative-pottery-workshop',
    title: 'Creative Pottery Workshop',
    type: 'events',
    created_at: '2024-01-17T00:00:00Z',
    modified_at: '2024-01-17T00:00:00Z',
    metadata: {
      description: 'Get your hands dirty in this beginner-friendly pottery workshop. Learn basic techniques while creating your own unique ceramic pieces in a relaxed, social setting.',
      host: sampleHosts[0],
      category: 'workshops',
      date: '2024-03-18',
      time: '14:00',
      location: {
        address: '321 Studio Lane',
        city: 'Portland',
        coordinates: {
          lat: 45.5152,
          lng: -122.6784
        }
      },
      featured_image: {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format,compress'
      },
      ticket_price: 35,
      max_guests: 10,
      current_guests: 6,
      status: 'published',
      tags: ['pottery', 'workshop', 'creative', 'hands-on'],
      requirements: 'Apron provided, wear clothes you don\'t mind getting dirty',
      what_to_expect: '3-hour workshop, all materials included, take home your creations',
      minimum_age: 18
    }
  },
  {
    id: 'event-5',
    slug: 'entrepreneur-networking-brunch',
    title: 'Entrepreneur Networking Brunch',
    type: 'events',
    created_at: '2024-02-03T00:00:00Z',
    modified_at: '2024-02-03T00:00:00Z',
    metadata: {
      description: 'Connect with fellow entrepreneurs, founders, and innovators over brunch. Share ideas, find collaborators, and build meaningful professional relationships.',
      host: sampleHosts[1],
      category: 'networking',
      date: '2024-03-19',
      time: '11:00',
      location: {
        address: '555 Business District',
        city: 'Austin',
        coordinates: {
          lat: 30.2672,
          lng: -97.7431
        }
      },
      featured_image: {
        url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
        imgix_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&auto=format,compress'
      },
      ticket_price: 45,
      max_guests: 25,
      current_guests: 18,
      status: 'published',
      tags: ['networking', 'entrepreneurs', 'brunch', 'business'],
      requirements: 'Business cards recommended',
      what_to_expect: 'Structured networking, guest speaker, gourmet brunch included',
      minimum_age: 22
    }
  }
];