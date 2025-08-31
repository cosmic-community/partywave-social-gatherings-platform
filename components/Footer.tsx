import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">PartyWave</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting amazing people through curated social experiences. 
              Where every gathering tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Discover Events
                </Link>
              </li>
              <li>
                <Link href="/host" className="text-gray-300 hover:text-white transition-colors">
                  Become a Host
                </Link>
              </li>
              <li>
                <Link href="/create-event" className="text-gray-300 hover:text-white transition-colors">
                  Create Event
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/events?category=social" className="text-gray-300 hover:text-white transition-colors">
                  Social Events
                </Link>
              </li>
              <li>
                <Link href="/events?category=workshops" className="text-gray-300 hover:text-white transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/events?category=wellness" className="text-gray-300 hover:text-white transition-colors">
                  Wellness
                </Link>
              </li>
              <li>
                <Link href="/events?category=networking" className="text-gray-300 hover:text-white transition-colors">
                  Networking
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-300 hover:text-white transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            
            <div className="mt-8">
              <div className="flex items-center text-gray-300 mb-2">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">hello@partywave.app</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PartyWave. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}