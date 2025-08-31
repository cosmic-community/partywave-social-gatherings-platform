import Navigation from '@/components/Navigation'
import EventsGrid from '@/components/EventsGrid'
import EventFilters from '@/components/EventFilters'
import Footer from '@/components/Footer'

export default function EventsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Discover Amazing Events
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next unforgettable experience from our curated collection of events
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 flex-shrink-0">
              <EventFilters />
            </aside>
            
            <main className="flex-1">
              <EventsGrid />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}