import { useState } from "react"
import { FaLeaf, FaShoppingCart, FaCheck } from "react-icons/fa"
import mango from "../../assets/mango.jpg"
import pawpaw from "../../assets/pawpaw.png"
import six from "../../assets/six.jpg"
import three from "../../assets/three.jpg"
import two from "../../assets/two.jpg"
import nine from "../../assets/nine.jpg"
import { useCart } from "../../context/CartContext"

// Image mapping
const imageMap = {
  "mango.jpg": mango,
  "pawpaw.png": pawpaw,
  "six.jpg": six,
  "three.jpg": three,
  "two.jpg": two,
  "nine.png": nine,
  "nine.jpg": nine,
}

const Product = () => {
  const { addToCart } = useCart()
  const [addedItem, setAddedItem] = useState(null)

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      image: imageMap[product.image] || mango,
      size: "500ml",
      badge: product.badges?.[0] || "New",
    })
    setAddedItem(product.id)
    setTimeout(() => setAddedItem(null), 2000)
  }

  const Products = [
    {
      id: 1,
      name: "Green Power Elixir",
      description: "Total body cleanse and revitalization.",
      price: 6.99,
      image: "mango.jpg",
      badges: ["Bestseller", "Green"],
      badgeColors: ["bg-orange-500", "bg-green-500"]
    },
    {
      id: 2,
      name: "Sunshine C-Burst",
      description: "Maximize your Vitamin C intake, naturally.",
      price: 5.49,
      image: "pawpaw.png",
      badges: ["Fruit"],
      badgeColors: ["bg-orange-500"]
    },
    {
      id: 3,
      name: "Berry Protein Fix",
      description: "Post-workout recovery and sustained energy.",
      price: 7.99,
      image: "six.jpg",
      badges: ["Bestseller", "Protein"],
      badgeColors: ["bg-orange-500", "bg-purple-500"]
    },
    {
      id: 4,
      name: "Tropical Paradise",
      description: "Exotic fruits for a refreshing taste.",
      price: 6.49,
      image: "three.jpg",
      badges: ["Green"],
      badgeColors: ["bg-green-500"]
    },
    {
      id: 5,
      name: "Energy Booster",
      description: "Natural energy boost for your active lifestyle.",
      price: 7.49,
      image: "two.jpg",
      badges: ["Bestseller"],
      badgeColors: ["bg-orange-500"]
    },
    {
      id: 6,
      name: "Detox Green",
      description: "Deep cleansing and natural detoxification.",
      price: 6.99,
      image: "nine.jpg",
      badges: ["Green"],
      badgeColors: ["bg-green-500"]
    }
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 px-5">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Fresh
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-green-500">
            Juice Collection
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover our range of freshly pressed, nutrient-packed juices made from the finest natural ingredients
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            {/* Product Image */}
            <div className="relative h-64 bg-linear-to-br from-orange-50 to-green-50 overflow-hidden">
              <img 
                src={imageMap[product.image] || mango} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badges.map((badge, index) => (
                  <span 
                    key={index}
                    className={`${product.badgeColors[index] || "bg-orange-500"} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-slate-600 mb-4 min-h-48px leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <span className="text-3xl font-bold bg-linear-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <FaLeaf className="w-4 h-4 text-green-600" />
                  <span className="font-medium">100% Natural</span>
                </div>
              </div>

              <button 
                onClick={() => handleAddToCart(product)}
                className={`w-full font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  addedItem === product.id
                    ? "bg-green-600 text-white"
                    : "bg-linear-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white"
                }`}
              >
                {addedItem === product.id ? (
                  <>
                    <FaCheck className="w-5 h-5" />
                    Added!
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Product
