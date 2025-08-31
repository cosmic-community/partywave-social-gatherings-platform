'use client'

import { Event } from '@/types'
import { useState } from 'react'
import { Calendar, MapPin, Users, Clock, DollarSign, Star, Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import BookingModal from './BookingModal'

interface EventDetailsProps {
  event: Event
}

export default function EventDetails({ event }: EventDetailsProps) {
  const [showBookingModal, setShowBookingModal] = useState(false)
  
  const formatDate = (dateString: string, timeString: string) => {
    const date = new Date(`${dateString}T${timeString}`)
    return {
      full: date.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    }
  }

  const { full: dateText, time } = formatDate(event.metadata.date, event.metadata.time)
  const spotsLeft = event.metadata.max_guests - event.metadata.current_guests
  const isAlmostFull = spotsLeft <= 3

  return (
    <div className="pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/events" 
          className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            {event.metadata.featured_image && (
              <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                <img
                  src={`${event.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  width="600"
                  height="300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">{event.title}</h1>
                  <p className="text-xl opacity-90">Hosted by {event.metadata.host.title}</p>
                </div>
              </div>
            )}

            {/* Event Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <Calendar className="w-8 h-8 text-primary-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-semibold text-gray-900">{dateText}</p>
                  <p className="text-sm text-gray-600">{time}</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <MapPin className="w-8 h-8 text-primary-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">{event.metadata.location.address}</p>
                  <p className="text-sm text-gray-600">{event.metadata.location.city}</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <Users className="w-8 h-8 text-primary-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Capacity</p>
                  <p className="font-semibold text-gray-900">
                    {event.metadata.current_guests} / {event.metadata.max_guests} guests
                  </p>
                  <p className="text-sm text-gray-600">{spotsLeft} spots remaining</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                <DollarSign className="w-8 h-8 text-primary-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="font-semibold text-gray-900 text-2xl">${event.metadata.ticket_price}</p>
                  <p className="text-sm text-gray-600">per person</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {event.metadata.description}
              </p>
              
              {event.metadata.what_to_expect && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {event.metadata.what_to_expect}
                  </p>
                </>
              )}

              {event.metadata.requirements && (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Bring</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {event.metadata.requirements}
                  </p>
                </>
              )}
            </div>

            {/* Tags */}
            {event.metadata.tags && event.metadata.tags.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {event.metadata.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ${event.metadata.ticket_price}
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>

                {isAlmostFull && (
                  <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-warning-600 mr-2" />
                      <span className="text-sm font-medium text-warning-800">
                        Only {spotsLeft} spots left!
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowBookingModal(true)}
                  disabled={spotsLeft === 0}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    spotsLeft === 0
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'btn-primary'
                  }`}
                >
                  {spotsLeft === 0 ? 'Sold Out' : 'Request to Join'}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  You won't be charged until your request is approved
                </p>
              </div>

              {/* Host Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Host</h3>
                
                <div className="flex items-center mb-4">
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
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {event.metadata.host.title}
                    </h4>
                    {event.metadata.host.metadata.verification_status === 'verified' && (
                      <div className="flex items-center text-green-600 text-sm">
                        <Shield className="w-4 h-4 mr-1" />
                        Verified Host
                      </div>
                    )}
                  </div>
                </div>

                {event.metadata.host.metadata.bio && (
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {event.metadata.host.metadata.bio}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {event.metadata.host.metadata.total_events || 0}
                    </div>
                    <div className="text-sm text-gray-600">Events</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-2xl font-bold text-gray-900">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      {event.metadata.host.metadata.average_rating || 5.0}
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          event={event}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </div>
  )
}