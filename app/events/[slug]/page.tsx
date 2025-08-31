// app/events/[slug]/page.tsx
import { getEventBySlug } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import EventDetails from '@/components/EventDetails'
import Footer from '@/components/Footer'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export default async function EventPage({ params }: EventPageProps) {
  // IMPORTANT: In Next.js 15+, params are now Promises and MUST be awaited
  const { slug } = await params
  
  const event = await getEventBySlug(slug)
  
  if (!event) {
    notFound()
  }

  return (
    <main>
      <Navigation />
      <EventDetails event={event} />
      <Footer />
    </main>
  )
}