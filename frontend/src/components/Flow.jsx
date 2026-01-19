import { useState, useEffect } from 'react'
import { 
  FaLeaf, 
  FaHeart, 
  FaFlask, 
  FaAppleAlt,
  FaSeedling,
  FaWater
} from "react-icons/fa"
import { IoSparkles } from "react-icons/io5"

const Flow = () => {
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    // Animate cards in sequence
    const timer1 = setTimeout(() => setVisibleCards([0]), 100)
    const timer2 = setTimeout(() => setVisibleCards([0, 1]), 300)
    const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 500)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  const features = [
    {
      id: 1,
      icon: FaLeaf,
      title: "Fresh & Natural",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Natural fresh juices are made directly from whole fruits and vegetables without artificial additives, preservatives, or excessive processing.",
      benefits: [
        "Retain essential vitamins (A, C, E, K) and minerals",
        "Provide natural enzymes that aid digestion",
        "Support immunity, energy levels, and overall wellness",
        "Nutrients preserved without heat or chemicals"
      ]
    },
    {
      id: 2,
      icon: FaAppleAlt,
      title: "Pure & Sweet",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      description: "Fresh juices rely solely on the natural sugars found in fruits. No artificial sweeteners, colorants, or flavor enhancers.",
      benefits: [
        "100% natural fruit sugars only",
        "No artificial sweeteners or additives",
        "Lower risk of blood sugar spikes",
        "Safer for daily consumption"
      ]
    },
    {
      id: 3,
      icon: FaWater,
      title: "Hydration & Detox",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Fresh juices help the body cleanse naturally while keeping it hydrated. Ideal for detox programs, active lifestyles, and recovery.",
      benefits: [
        "High water content supports hydration",
        "Antioxidants assist in flushing out toxins",
        "Fiber supports gut health",
        "Perfect for active lifestyles"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 mb-4">
            <IoSparkles className="text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Fresh Juice,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
              Better Benefits
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the difference of truly fresh, natural juices that deliver real health benefits
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(index)
            
            return (
              <div
                key={feature.id}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-3xl ${feature.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${feature.iconBg} flex items-center justify-center mt-0.5`}>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                        </div>
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Indicator */}
                  <div className={`mt-6 pt-6 border-t border-slate-200 group-hover:border-transparent transition-colors`}>
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <span>Learn More</span>
                      <FaHeart className="text-xs animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <FaSeedling />
            <span>Explore Our Full Range</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flow
