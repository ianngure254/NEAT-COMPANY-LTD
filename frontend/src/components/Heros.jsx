import { useState, useEffect } from 'react'
import mango from '../assets/mango.jpg'
import { SiCodefresh } from "react-icons/si"
import { FaArrowRight, FaLeaf, FaHeart, FaTruck } from "react-icons/fa"
import { IoSparkles } from "react-icons/io5"

const Heros = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animated counter component
  const Counter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, [end, duration])

    return <span>{count}{suffix}</span>
  }

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-2.5 text-sm font-semibold text-green-700 hover:from-green-200 hover:to-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
              <IoSparkles className="text-green-600 animate-pulse" />
              <span>Fresh & Dairy-Free</span>
              <SiCodefresh className="text-green-600" />
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Fresh Juice,
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-green-500 bg-clip-text text-transparent animate-gradient">
                  Better Health
                </span>
              </h1>
              
              {/* Description */}
              <p className="mt-6 max-w-xl text-slate-600 text-lg md:text-xl leading-relaxed">
                Discover our delicious, nutrient-packed juices made from the finest
                natural ingredients. Freshly pressed daily and delivered straight to 
                your door for maximum freshness and nutrition.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-white font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Order Now</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-orange-500 px-8 py-4 text-orange-600 font-semibold text-lg hover:bg-orange-50 transition-all duration-300">
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">
                  <Counter end={100} suffix="%" />
                </div>
                <p className="text-sm text-slate-600 mt-1">Fresh</p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-green-600">
                  <Counter end={50} suffix="K+" />
                </div>
                <p className="text-sm text-slate-600 mt-1">Happy Customers</p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-orange-600">
                  <Counter end={24} suffix="/7" />
                </div>
                <p className="text-sm text-slate-600 mt-1">Available</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaLeaf className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">100% Natural</h3>
                  <p className="text-xs text-slate-600">Pressed daily</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <FaHeart className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">No Additives</h3>
                  <p className="text-xs text-slate-600">Pure ingredients</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FaTruck className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Fast Delivery</h3>
                  <p className="text-xs text-slate-600">Same day service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-50 animate-pulse animation-delay-2000"></div>
              
              {/* Main image */}
              <div className="relative group">
                <img 
                  src={mango} 
                  alt="Fresh mango juice" 
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl ring-4 ring-white/80 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-2 border-orange-200 animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-slate-700">Fresh Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Heros
