import { useState, useEffect } from 'react'
import Contents from "../data/Content"
import { FaStar, FaQuoteLeft } from "react-icons/fa"
import { IoSparkles } from "react-icons/io5"

// Import avatar images
import ianAvatar from '../assets/ian.png'
import jamesAvatar from '../assets/james.png'
import kelvinAvatar from '../assets/kelvin.png'
import brianAvatar from '../assets/brian.png'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules"

// Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Map avatar names to imported images
  const avatarMap = {
    ian: ianAvatar,
    james: jamesAvatar,
    kelvin: kelvinAvatar,
    brian: brianAvatar,
  }

  // Generate random star ratings (4-5 stars for better UX)
  const getRating = (id) => {
    // Consistent rating based on ID
    return id % 2 === 0 ? 5 : 4.5
  }

  // Render star rating
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <FaStar key={i} className="text-yellow-400 fill-current text-sm" />
          } else if (i === fullStars && hasHalfStar) {
            return (
              <div key={i} className="relative inline-block">
                <FaStar className="text-gray-300 text-sm" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <FaStar className="text-yellow-400 fill-current text-sm" />
                </div>
              </div>
            )
          } else {
            return <FaStar key={i} className="text-gray-300 text-sm" />
          }
        })}
        <span className="ml-2 text-sm text-slate-600 font-medium">{rating}</span>
      </div>
    )
  }

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 mb-4">
            <IoSparkles className="text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Customer Stories</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
              Customers Say
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real stories from people who enjoy our fresh, natural juices every day
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          breakpoints={{
            640: { 
              slidesPerView: 1,
              coverflowEffect: {
                rotate: 0,
                depth: 100,
              }
            },
            768: { 
              slidesPerView: 2,
              coverflowEffect: {
                rotate: 15,
                depth: 150,
              }
            },
            1024: { 
              slidesPerView: 3,
              coverflowEffect: {
                rotate: 20,
                depth: 200,
              }
            },
          }}
          className="pb-16 !overflow-visible"
        >
          {Contents.map((content, index) => {
            const avatar = avatarMap[content.avatar?.toLowerCase()] || ianAvatar
            const rating = getRating(content.id)
            
            return (
              <SwiperSlide key={content.id}>
                <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
                  
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-green-100 rounded-full">
                      <FaQuoteLeft className="text-orange-500 text-xl" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={rating} />
                  </div>
                  
                  {/* Quote */}
                  <p className="text-slate-700 leading-relaxed mb-6 flex-grow text-base md:text-lg italic">
                    "{content.remarks}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-slate-200 pt-6 flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={avatar} 
                        alt={content.name}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-orange-100 shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-lg">
                        {content.name}
                      </p>
                      <p className="text-sm text-slate-500 font-medium">
                        {content.role}
                      </p>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-green-50 rounded-bl-full opacity-50 -z-10"></div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">4.9/5</div>
            <div className="text-sm text-slate-600">Average Rating</div>
          </div>
          
          <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">50K+</div>
            <div className="text-sm text-slate-600">Happy Customers</div>
          </div>
          
          <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">98%</div>
            <div className="text-sm text-slate-600">Satisfaction Rate</div>
          </div>
          
          <div className="p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">24/7</div>
            <div className="text-sm text-slate-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
