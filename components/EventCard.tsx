import { Event } from '@/types'
import Link from 'next/link'
import { Calendar, MapPin, Users, DollarSign } from 'lucide-react'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string, timeString?: string) => {
    // FIXED: Handle optional time parameter with proper null check
    const timeStr = timeString || '00:00'
    const date = new Date(`${dateString}T${timeStr}`)
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      time: timeString ? date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }) : 'Time TBD'
    }
  }

  // FIXED: Pass optional time parameter safely
  const { day, month, time } = formatDate(event.metadata.date, event.metadata.time)
  const spotsLeft = event.metadata.max_guests - event.metadata.current_guests

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <div className="bg-white rounded-2xl shadow-lg card-hover overflow-hidden">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          {event.metadata.featured_image && (
            <img
              src={`${event.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              width="300"
              height="200"
            />
          )}
          
          {/* Date Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 text-center shadow-lg">
            <div className="text-sm font-bold text-gray-900">{month}</div>
            <div className="text-2xl font-bold text-primary-600">{day}</div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <div className={`category-badge ${getCategoryStyle(event.metadata.category)}`}>
              {getCategoryIcon(event.metadata.category)} {event.metadata.category}
            </div>
          </div>
        </div>
        
        {/* Event Details */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {event.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {event.metadata.description}
          </p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2 text-primary-500" />
              <span>{time}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2 text-primary-500" />
              <span className="line-clamp-1">{event.metadata.location.city}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-2 text-primary-500" />
              <span>{spotsLeft} spots left</span>
            </div>
          </div>
          
          {/* Host Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {event.metadata.host.metadata.avatar && (
                <img
                  src={`${event.metadata.host.metadata.avatar.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={event.metadata.host.title}
                  className="w-8 h-8 rounded-full object-cover mr-2"
                  width="32"
                  height="32"
                />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {event.metadata.host.title}
                </p>
                {event.metadata.host.metadata.verification_status === 'verified' && (
                  <p className="text-xs text-green-600">✓ Verified</p>
                )}
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-lg font-bold text-gray-900">
                <DollarSign className="w-4 h-4" />
                <span>{event.metadata.ticket_price}</span>
              </div>
              <p className="text-xs text-gray-500">per person</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function getCategoryStyle(category: string): string {
  const styles = {
    'social': 'tier-green',
    'workshops': 'tier-blue',
    'music': 'tier-blue',
    'wellness': 'tier-blue',
    'networking': 'tier-gold',
    'premium': 'tier-gold'
  }
  return styles[category as keyof typeof styles] || 'tier-green'
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