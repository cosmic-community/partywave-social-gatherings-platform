'use client'

import { useState } from 'react'
import { sampleCategories } from '@/lib/sample-data'
import { Filter, X } from 'lucide-react'

interface FilterState {
  category: string
  priceRange: [number, number]
  date: string
  location: string
}

export default function EventFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    priceRange: [0, 200],
    date: '',
    location: ''
  })

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category === category ? '' : category
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 200],
      date: '',
      location: ''
    })
  }

  const hasActiveFilters = filters.category || filters.date || filters.location || 
    filters.priceRange[0] > 0 || filters.priceRange[1] < 200

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full btn-secondary flex items-center justify-center"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`
        bg-white rounded-2xl p-6 shadow-lg sticky top-6
        ${isOpen ? 'block' : 'hidden lg:block'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Filter className="w-5 h-5 mr-2 text-primary-600" />
            <h3 className="font-bold text-lg">Filters</h3>
          </div>
          
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
            >
              Clear All
            </button>
          )}
          
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
          <div className="space-y-2">
            {sampleCategories.map(category => (
              <label
                key={category.id}
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
              >
                <input
                  type="checkbox"
                  checked={filters.category === category.slug}
                  onChange={() => handleCategoryChange(category.slug)}
                  className="mr-3 w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                />
                <div className="flex items-center flex-1">
                  <span className="text-lg mr-2">{category.metadata.icon}</span>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.title}
                  </span>
                </div>
                <div className={`category-badge tier-${category.metadata.tier} text-xs`}>
                  {category.metadata.tier}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
          <div className="px-3">
            <input
              type="range"
              min="0"
              max="200"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                priceRange: [0, parseInt(e.target.value)]
              }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-600">$0</span>
              <span className="text-sm font-medium text-primary-600">
                Up to ${filters.priceRange[1]}
              </span>
              <span className="text-sm text-gray-600">$200+</span>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 mb-4">Date</h4>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
            className="input-field"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Location</h4>
          <select
            value={filters.location}
            onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            className="input-field"
          >
            <option value="">All Cities</option>
            <option value="san-francisco">San Francisco</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="new-york">New York</option>
            <option value="austin">Austin</option>
            <option value="portland">Portland</option>
          </select>
        </div>

        {/* Apply Button (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full btn-primary"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}