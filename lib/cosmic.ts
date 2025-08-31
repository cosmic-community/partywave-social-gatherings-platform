import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get all events with host details
export async function getEvents() {
  try {
    const response = await cosmic.objects
      .find({ type: 'events' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects.sort((a, b) => {
      const dateA = new Date(a.metadata?.date || '').getTime();
      const dateB = new Date(b.metadata?.date || '').getTime();
      return dateB - dateA; // Newest first
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch events');
  }
}

// Get event by slug
export async function getEventBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'events',
        slug
      })
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch event');
  }
}

// Get events by category
export async function getEventsByCategory(category: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'events',
        'metadata.category': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch events by category');
  }
}

// Get all hosts
export async function getHosts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'hosts' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch hosts');
  }
}

// Get host by id
export async function getHostById(id: string) {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'hosts',
        id
      });
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch host');
  }
}

// Get all guests
export async function getGuests() {
  try {
    const response = await cosmic.objects
      .find({ type: 'guests' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch guests');
  }
}

// Get bookings for a host
export async function getBookingsForHost(hostId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'bookings',
        'metadata.event.metadata.host.id': hostId
      })
      .props(['id', 'title', 'metadata'])
      .depth(2);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch bookings');
  }
}

// Get bookings for a guest
export async function getBookingsForGuest(guestId: string) {
  try {
    const response = await cosmic.objects
      .find({
        type: 'bookings',
        'metadata.guest.id': guestId
      })
      .props(['id', 'title', 'metadata'])
      .depth(2);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch guest bookings');
  }
}

// Create a new event
export async function createEvent(eventData: any) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'events',
      title: eventData.title,
      slug: eventData.title.toLowerCase().replace(/\s+/g, '-'),
      metadata: {
        description: eventData.description,
        host: eventData.hostId,
        category: eventData.category,
        date: eventData.date,
        time: eventData.time,
        location: {
          address: eventData.address,
          city: eventData.city
        },
        ticket_price: parseFloat(eventData.ticket_price),
        max_guests: parseInt(eventData.max_guests),
        current_guests: 0,
        status: 'published',
        tags: eventData.tags || [],
        requirements: eventData.requirements || '',
        what_to_expect: eventData.what_to_expect || '',
        minimum_age: eventData.minimum_age ? parseInt(eventData.minimum_age) : undefined
      }
    });
    
    return response.object;
  } catch (error) {
    console.error('Error creating event:', error);
    throw new Error('Failed to create event');
  }
}

// Create a new booking
export async function createBooking(bookingData: any) {
  try {
    const response = await cosmic.objects.insertOne({
      type: 'bookings',
      title: `Booking for ${bookingData.eventTitle}`,
      metadata: {
        event: bookingData.eventId,
        guest: bookingData.guestId,
        status: 'pending',
        payment_status: 'pending',
        amount: bookingData.amount,
        booking_date: new Date().toISOString(),
        special_requests: bookingData.special_requests || '',
        guest_count: bookingData.guest_count || 1
      }
    });
    
    return response.object;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }
}

// Update booking status
export async function updateBookingStatus(bookingId: string, status: string, paymentStatus?: string) {
  try {
    const updateData: any = { status };
    
    if (paymentStatus) {
      updateData.payment_status = paymentStatus;
    }
    
    if (status === 'approved') {
      updateData.approved_date = new Date().toISOString();
    }
    
    const response = await cosmic.objects.updateOne(bookingId, {
      metadata: updateData
    });
    
    return response.object;
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw new Error('Failed to update booking status');
  }
}

// Get all categories
export async function getCategories() {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}