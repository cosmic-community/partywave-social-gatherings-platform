import { sampleCategories } from '@/lib/sample-data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate workshops to exclusive networking events, find experiences that match your vibe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCategories.map((category, index) => (
            <Link
              key={category.id}
              href={`/events?category=${category.slug}`}
              className="group"
            >
              <div 
                className={`p-8 rounded-2xl card-hover transition-all duration-300 ${
                  category.metadata.tier === 'green' ? 'bg-emerald-50 border-2 border-emerald-200' :
                  category.metadata.tier === 'blue' ? 'bg-blue-50 border-2 border-blue-200' :
                  'bg-yellow-50 border-2 border-yellow-200'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.metadata.icon}</div>
                  <div className={`category-badge tier-${category.metadata.tier}`}>
                    {category.metadata.tier.charAt(0).toUpperCase() + category.metadata.tier.slice(1)} Tier
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.metadata.description}
                </p>
                
                {category.metadata.price_range && (
                  <div className="text-sm text-gray-500 mb-4">
                    ${category.metadata.price_range.min} - ${category.metadata.price_range.max}
                  </div>
                )}
                
                <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                  <span className="font-medium">Explore Events</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}