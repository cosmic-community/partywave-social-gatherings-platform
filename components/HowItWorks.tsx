import { UserPlus, Search, CreditCard, PartyPopper } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Sign Up",
      description: "Create your profile and get verified to join the community",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discover",
      description: "Browse curated events that match your interests and location",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Book & Pay",
      description: "Request to join events and pay securely once approved",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Experience",
      description: "Attend amazing events and build meaningful connections",
      color: "bg-pink-100 text-pink-600"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community in four simple steps and start discovering amazing experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110`}>
                {step.icon}
              </div>
              
              <div className="relative">
                <div className="text-sm font-bold text-gray-400 mb-2">
                  STEP {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-gradient-primary opacity-30"></div>
                      <div className="w-2 h-2 bg-primary-400 rounded-full ml-2"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to get started? Join thousands of people discovering amazing experiences
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}