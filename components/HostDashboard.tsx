'use client'

import { useState, useEffect } from 'react'
import { sampleEvents, sampleHosts } from '@/lib/sample-data'
import { Event, Host, AnalyticsData, ChartData } from '@/types'
import { Calendar, DollarSign, Users, TrendingUp, Plus, Eye, Edit, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import AnalyticsCharts from './AnalyticsCharts'

export default function HostDashboard() {
  const [events, setEvents] = useState<Event[]>([])
  const [host, setHost] = useState<Host | null>(null)
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Mock data for demo
      const mockHost = sampleHosts[0]
      const mockEvents = sampleEvents.slice(0, 3)
      
      const mockAnalytics: AnalyticsData = {
        totalRevenue: 2850,
        totalBookings: 45,
        totalEvents: 12,
        averageTicketPrice: 63.33,
        categoryBreakdown: {
          labels: ['Social', 'Workshops', 'Wellness', 'Music'],
          datasets: [{
            label: 'Events by Category',
            data: [5, 3, 2, 2],
            backgroundColor: [
              '#10B981',
              '#3B82F6', 
              '#06B6D4',
              '#8B5CF6'
            ]
          }]
        },
        revenueOverTime: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Revenue',
            data: [320, 450, 380, 520, 680, 850],
            backgroundColor: '#8B5CF6',
            borderColor: '#8B5CF6',
            borderWidth: 2
          }]
        },
        popularTimes: {
          labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
          datasets: [{
            label: 'Bookings by Time',
            data: [8, 12, 20, 5],
            backgroundColor: [
              '#F59E0B',
              '#10B981',
              '#8B5CF6',
              '#3B82F6'
            ]
          }]
        }
      }
      
      setHost(mockHost)
      setEvents(mockEvents)
      setAnalytics(mockAnalytics)
      setLoading(false)
    }
    
    loadDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
          <div className="h-64 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    )
  }

  if (!host || !analytics) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-600">Unable to load dashboard data</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
            Welcome back, {host.title.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your events
          </p>
        </div>
        
        <Link href="/create-event" className="btn-primary flex items-center mt-4 md:mt-0">
          <Plus className="w-5 h-5 mr-2" />
          Create New Event
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">This month</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            ${analytics.totalRevenue.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600">Total Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">All time</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {analytics.totalBookings}
          </div>
          <p className="text-sm text-gray-600">Total Bookings</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">All time</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {analytics.totalEvents}
          </div>
          <p className="text-sm text-gray-600">Events Created</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-500">Average</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            ${analytics.averageTicketPrice.toFixed(0)}
          </div>
          <p className="text-sm text-gray-600">Avg. Ticket Price</p>
        </div>
      </div>

      {/* Analytics Charts */}
      <AnalyticsCharts data={analytics} />

      {/* Recent Events */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Events</h2>
          <Link href="/events" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View All
          </Link>
        </div>
        
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center">
                {event.metadata.featured_image && (
                  <img
                    src={`${event.metadata.featured_image.imgix_url}?w=128&h=96&fit=crop&auto=format,compress`}
                    alt={event.title}
                    className="w-16 h-12 rounded-lg object-cover mr-4"
                    width="64"
                    height="48"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(`${event.metadata.date}T${event.metadata.time}`).toLocaleDateString()} • 
                    {event.metadata.current_guests}/{event.metadata.max_guests} guests
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Link 
                  href={`/events/${event.slug}`}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </Link>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}