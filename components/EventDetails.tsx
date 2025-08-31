import { Event } from '@/types'
import { Calendar, MapPin, Users, Clock, DollarSign, Shield, Star } from 'lucide-react'

interface EventDetailsProps {
  event: Event
}

export default function EventDetails({ event }: EventDetailsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      full: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      short: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':')
    const date = new Date()
    date.setHours(parseInt(hours), parseInt(minutes))
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const spotsLeft = event.metadata.max_guests - event.metadata.current_guests
  const { full: fullDate } = formatDate(event.metadata.date)
  
  // FIXED: Add proper null check for time field to prevent TypeScript error
  const formattedTime = event.metadata.time ? formatTime(event.metadata.time) : 'Time TBD'

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            {event.metadata.featured_image && (
              <img
                src={`${event.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={event.title}
                className="w-full h-full object-cover"
                width="1200"
                height="600"
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="p-8 text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm mb-4">
                  {getCategoryIcon(event.metadata.category)} {event.metadata.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{event.title}</h1>
                <p className="text-lg opacity-90">Hosted by {event.metadata.host.title}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Event Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{fullDate}</div>
                      <div className="text-xs text-gray-500">{formattedTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{event.metadata.location.city}</div>
                      <div className="text-xs text-gray-500">View Details</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-2 text-primary-500" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{spotsLeft} spots left</div>
                      <div className="text-xs text-gray-500">of {event.metadata.max_guests}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2 text-primary-500" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">${event.metadata.ticket_price}</div>
                      <div className="text-xs text-gray-500">per person</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.metadata.description}
                </p>

                {event.metadata.what_to_expect && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
                    <p className="text-gray-600">{event.metadata.what_to_expect}</p>
                  </div>
                )}

                {event.metadata.requirements && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">What to Bring</h3>
                    <p className="text-gray-600">{event.metadata.requirements}</p>
                  </div>
                )}

                {event.metadata.tags && event.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {event.metadata.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Location</h2>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{event.metadata.location.address}</p>
                    <p className="text-gray-600">{event.metadata.location.city}</p>
                  </div>
                </div>
                <div className="mt-4 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Map View</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24 mb-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${event.metadata.ticket_price}
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>

                <button className="btn-primary w-full mb-4">
                  Request to Join
                </button>

                <div className="text-center text-sm text-gray-500 mb-4">
                  You'll be charged after host approval
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Available spots</span>
                    <span className="font-medium">{spotsLeft} left</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">3 hours</span>
                  </div>
                  {event.metadata.minimum_age && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Age requirement</span>
                      <span className="font-medium">{event.metadata.minimum_age}+</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Host Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Your Host</h3>
                
                <div className="flex items-start mb-4">
                  {event.metadata.host.metadata.avatar && (
                    <img
                      src={`${event.metadata.host.metadata.avatar.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                      alt={event.metadata.host.title}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      width="64"
                      height="64"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.metadata.host.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Shield className="w-4 h-4 mr-1 text-green-500" />
                      <span>Verified Host</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span>{event.metadata.host.metadata.average_rating}/5 ({event.metadata.host.metadata.total_events} events)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {event.metadata.host.metadata.bio}
                </p>
                
                <button className="btn-ghost w-full">
                  View Host Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getCategoryIcon(category: string): string {
  const icons = {
    'social': '🎉',
    'workshops': '🎨',
    'music': '🎵',
    'wellness': '🧘',
    'networking': '🤝',
    'premium': '✨'
  }
  return icons[category as keyof typeof icons] || '🎉'
}