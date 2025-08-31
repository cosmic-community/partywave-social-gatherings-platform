import Navigation from '@/components/Navigation'
import HostDashboard from '@/components/HostDashboard'
import Footer from '@/components/Footer'

export default function HostPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20 pb-12 min-h-screen">
        <div className="container mx-auto px-4">
          <HostDashboard />
        </div>
      </div>
      <Footer />
    </main>
  )
}