'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Calendar } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3 text-yellow-300 animate-pulse" />
            <span className="text-lg font-medium">Curated Social Experiences</span>
            <Sparkles className="w-8 h-8 ml-3 text-yellow-300 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Where Amazing
            <br />
            <span className="text-yellow-300">People Meet</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover verified, curated events that bring together like-minded people for unforgettable experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/events" className="group bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center">
              Discover Events
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/host" className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/30 flex items-center">
              Become a Host
              <Users className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-white/80">Events Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2.5k+</div>
            <div className="text-white/80">Happy Guests</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-white/80">Verified Hosts</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  )
}