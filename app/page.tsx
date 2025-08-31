import Hero from '@/components/Hero'
import FeaturedEvents from '@/components/FeaturedEvents'
import Categories from '@/components/Categories'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedEvents />
      <HowItWorks />
      <Footer />
    </main>
  )
}