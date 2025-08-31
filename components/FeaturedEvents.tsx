import { sampleEvents } from '@/lib/sample-data'
import EventCard from './EventCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FeaturedEvents() {
  // Show first 3 events as featured
  const featuredEvents = sampleEvents.slice(0, 3)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked experiences from our community of verified hosts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event, index) => (
            <div
              key={event.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/events" className="group inline-flex items-center btn-secondary">
            View All Events
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}