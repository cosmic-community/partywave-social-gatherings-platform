'use client'

import { useState } from 'react'
import { Calendar, MapPin, DollarSign, Users, Filter, X } from 'lucide-react'

export default function EventFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    location: '',
    priceRange: { min: 0, max: 100 },
    capacity: ''
  })

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'social', label: 'Social' },
    { value: 'workshops', label: 'Workshops' },
    { value: 'music', label: 'Music' },
    { value: 'wellness', label: 'Wellness' },
    { value: 'networking', label: 'Networking' },
    { value: 'premium', label: 'Premium' }
  ]

  const cities = [
    { value: '', label: 'All Cities' },
    { value: 'san-francisco', label: 'San Francisco' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'new-york', label: 'New York' },
    { value: 'austin', label: 'Austin' },
    { value: 'portland', label: 'Portland' }
  ]

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      date: '',
      location: '',
      priceRange: { min: 0, max: 100 },
      capacity: ''
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between btn-secondary"
        >
          <span className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </span>
          {isOpen ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
        </button>
      </div>

      {/* Filters */}
      <div className={`space-y-6 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-900">Filters</h3>
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="input-field"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Date
          </label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => handleFilterChange('date', e.target.value)}
            className="input-field"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            City
          </label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="input-field"
          >
            {cities.map(city => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Price Range
          </label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceRange.min}
                onChange={(e) => handleFilterChange('priceRange', {
                  ...filters.priceRange,
                  min: Number(e.target.value)
                })}
                className="input-field flex-1"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={filters.priceRange.max}
                onChange={(e) => handleFilterChange('priceRange', {
                  ...filters.priceRange,
                  max: Number(e.target.value)
                })}
                className="input-field flex-1"
              />
            </div>
            <div className="text-sm text-gray-500">
              ${filters.priceRange.min} - ${filters.priceRange.max}
            </div>
          </div>
        </div>

        {/* Capacity Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Users className="w-4 h-4 inline mr-1" />
            Group Size
          </label>
          <select
            value={filters.capacity}
            onChange={(e) => handleFilterChange('capacity', e.target.value)}
            className="input-field"
          >
            <option value="">Any Size</option>
            <option value="small">Small (1-10 people)</option>
            <option value="medium">Medium (11-25 people)</option>
            <option value="large">Large (26+ people)</option>
          </select>
        </div>

        {/* Apply Filters Button */}
        <div className="pt-4 border-t border-gray-200">
          <button className="btn-primary w-full">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}