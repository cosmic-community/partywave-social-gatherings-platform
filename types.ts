export interface CosmicObject {
  id: string
  slug: string
  title: string
  type: string
  created_at: string
  modified_at: string
}

export interface MediaFile {
  url: string
  imgix_url: string
}

export interface Location {
  address: string
  city: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Host extends CosmicObject {
  type: 'hosts'
  metadata: {
    email: string
    phone?: string
    bio: string
    avatar?: MediaFile
    verification_status: 'verified' | 'pending' | 'rejected'
    total_events: number
    average_rating: number
    joined_date: string
    social_links?: {
      instagram?: string
      twitter?: string
      linkedin?: string
    }
  }
}

export interface Guest extends CosmicObject {
  type: 'guests'
  metadata: {
    email: string
    phone?: string
    bio?: string
    avatar?: MediaFile
    age_range?: string
    interests: string[]
    joined_date: string
    total_bookings: number
    preferred_categories: string[]
  }
}

export interface Category extends CosmicObject {
  type: 'categories'
  metadata: {
    description: string
    color: string
    icon: string
    tier: 'green' | 'blue' | 'gold'
    price_range?: {
      min: number
      max: number
    }
  }
}

export interface Event extends CosmicObject {
  type: 'events'
  metadata: {
    description: string
    host: Host
    category: string
    date: string
    time: string
    location: Location
    images?: MediaFile[]
    featured_image?: MediaFile
    ticket_price: number
    max_guests: number
    current_guests: number
    status: 'published' | 'draft' | 'cancelled'
    tags: string[]
    requirements?: string
    what_to_expect?: string
    minimum_age?: number
  }
}