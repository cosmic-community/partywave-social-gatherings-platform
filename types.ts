// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Host interface
export interface Host extends CosmicObject {
  type: 'hosts';
  metadata: {
    email: string;
    phone?: string;
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    verification_status: VerificationStatus;
    verification_documents?: {
      url: string;
      imgix_url: string;
    }[];
    total_events?: number;
    average_rating?: number;
    joined_date: string;
    social_links?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
}

// Guest interface
export interface Guest extends CosmicObject {
  type: 'guests';
  metadata: {
    email: string;
    phone?: string;
    bio?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    age_range?: AgeRange;
    interests?: string[];
    joined_date: string;
    total_bookings?: number;
    preferred_categories?: EventCategory[];
  };
}

// Event interface
export interface Event extends CosmicObject {
  type: 'events';
  metadata: {
    description: string;
    host: Host;
    category: EventCategory;
    date: string;
    time: string;
    location: {
      address: string;
      city: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
    images?: {
      url: string;
      imgix_url: string;
    }[];
    ticket_price: number;
    max_guests: number;
    current_guests: number;
    status: EventStatus;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    tags?: string[];
    requirements?: string[];
    what_to_expect?: string;
    cancellation_policy?: string;
    minimum_age?: number;
  };
}

// Booking interface
export interface Booking extends CosmicObject {
  type: 'bookings';
  metadata: {
    event: Event;
    guest: Guest;
    status: BookingStatus;
    payment_status: PaymentStatus;
    payment_id?: string;
    amount: number;
    booking_date: string;
    approved_date?: string;
    special_requests?: string;
    guest_count?: number;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    description?: string;
    color: string;
    icon?: string;
    tier: CategoryTier;
    price_range?: {
      min: number;
      max: number;
    };
  };
}

// Type literals for select-dropdown values
export type VerificationStatus = 'pending' | 'verified' | 'rejected';
export type EventStatus = 'draft' | 'published' | 'cancelled' | 'completed';
export type BookingStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';
export type EventCategory = 'social' | 'workshops' | 'music' | 'wellness' | 'networking' | 'premium';
export type CategoryTier = 'green' | 'blue' | 'gold';
export type AgeRange = '18-25' | '26-30' | '31-35' | '36+';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Form data types
export interface CreateEventFormData {
  title: string;
  description: string;
  category: EventCategory;
  date: string;
  time: string;
  address: string;
  city: string;
  ticket_price: number;
  max_guests: number;
  tags?: string[];
  requirements?: string;
  what_to_expect?: string;
  minimum_age?: number;
}

export interface HostSignupFormData {
  title: string;
  email: string;
  phone?: string;
  bio?: string;
}

export interface GuestSignupFormData {
  title: string;
  email: string;
  phone?: string;
  bio?: string;
  age_range?: AgeRange;
  interests?: string[];
}

export interface BookingFormData {
  eventId: string;
  guestId: string;
  special_requests?: string;
  guest_count: number;
}

// Chart data types for analytics
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface AnalyticsData {
  totalRevenue: number;
  totalBookings: number;
  totalEvents: number;
  averageTicketPrice: number;
  categoryBreakdown: ChartData;
  revenueOverTime: ChartData;
  popularTimes: ChartData;
}

// Type guards for runtime validation
export function isHost(obj: CosmicObject): obj is Host {
  return obj.type === 'hosts';
}

export function isGuest(obj: CosmicObject): obj is Guest {
  return obj.type === 'guests';
}

export function isEvent(obj: CosmicObject): obj is Event {
  return obj.type === 'events';
}

export function isBooking(obj: CosmicObject): obj is Booking {
  return obj.type === 'bookings';
}

// Utility types
export type CreateEventData = Omit<Event, 'id' | 'created_at' | 'modified_at'>;
export type CreateHostData = Omit<Host, 'id' | 'created_at' | 'modified_at'>;
export type CreateGuestData = Omit<Guest, 'id' | 'created_at' | 'modified_at'>;
export type CreateBookingData = Omit<Booking, 'id' | 'created_at' | 'modified_at'>;

// Auth types
export interface AuthUser {
  id: string;
  title: string;
  email: string;
  type: 'host' | 'guest';
  avatar?: string;
  verified?: boolean;
}

// Payment types
export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: string;
  client_secret: string;
}

// Stripe types
export interface StripePaymentData {
  eventId: string;
  guestId: string;
  amount: number;
  currency: string;
  description: string;
}