'use client'

import { useState } from 'react'
import { Event } from '@/types'
import { X, CreditCard, Shield, Users } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface BookingModalProps {
  event: Event
  onClose: () => void
}

export default function BookingModal({ event, onClose }: BookingModalProps) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    guestCount: 1,
    specialRequests: '',
    agreeToTerms: false
  })

  const totalPrice = event.metadata.ticket_price * formData.guestCount
  const maxGuests = Math.min(5, event.metadata.max_guests - event.metadata.current_guests)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions')
      return
    }

    setLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Booking request submitted! You\'ll hear from the host soon.')
      onClose()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Request to Join</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Event Summary */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              Hosted by {event.metadata.host.title}
            </p>
            <p className="text-sm text-gray-600">
              {new Date(`${event.metadata.date}T${event.metadata.time}`).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
              })}
            </p>
          </div>

          {/* Guest Count */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Guests
            </label>
            <select
              value={formData.guestCount}
              onChange={(e) => setFormData(prev => ({ ...prev, guestCount: parseInt(e.target.value) }))}
              className="input-field"
              required
            >
              {Array.from({ length: maxGuests }, (_, i) => i + 1).map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          {/* Special Requests */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
              rows={3}
              className="input-field resize-none"
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
            />
          </div>

          {/* Price Breakdown */}
          <div className="bg-primary-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700">
                ${event.metadata.ticket_price} × {formData.guestCount} guest{formData.guestCount !== 1 ? 's' : ''}
              </span>
              <span className="font-medium text-gray-900">${totalPrice}</span>
            </div>
            <div className="border-t border-primary-200 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-primary-600">${totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-yellow-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-yellow-800 mb-1">
                  Secure Payment
                </p>
                <p className="text-xs text-yellow-700">
                  You won't be charged until your request is approved by the host
                </p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                className="mt-1 mr-3 w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                required
              />
              <span className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  terms and conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                  cancellation policy
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !formData.agreeToTerms}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
              loading || !formData.agreeToTerms
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Submitting Request...
              </>
            ) : (
              <>
                <CreditCard className="w-5 h-5 mr-2" />
                Request to Join - ${totalPrice}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}