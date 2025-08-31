'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Calendar, Users, Plus } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold gradient-text">PartyWave</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/events" className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </Link>
            <Link href="/host" className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
              <Users className="w-4 h-4" />
              <span>Host</span>
            </Link>
            <Link href="/create-event" className="btn-primary flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create Event</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/events" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>Events</span>
              </Link>
              <Link 
                href="/host" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                <Users className="w-4 h-4" />
                <span>Host</span>
              </Link>
              <Link 
                href="/create-event" 
                className="btn-primary flex items-center justify-center space-x-2 mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Plus className="w-4 h-4" />
                <span>Create Event</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}