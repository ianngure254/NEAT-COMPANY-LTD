import { FaFacebookF, FaInstagram, FaTwitter, FaLeaf } from "react-icons/fa"

export const Least = () => {

 

  return (
    <footer className="bg-slate-600 text-orange-500">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
              <FaLeaf className="text-green-100" />
              Mawega Fresh
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-orange-200">
              Freshly pressed, nutrient-rich juices crafted from natural
              ingredients to fuel your health and wellness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">Menu</li>
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">FAQs</li>
              <li className="hover:text-white transition">Delivery Info</li>
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Terms & Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Stay Fresh 🍊
            </h3>
            <p className="text-sm text-orange-200 mb-4">
              Subscribe for new flavors, offers & wellness tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md text-slate-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-700 my-10"></div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-orange-300">
            © {new Date().getFullYear()} Mawega Fresh Juice. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a className="p-2 rounded-full bg-orange-800 hover:bg-orange-700 transition">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded-full bg-orange-800 hover:bg-orange-700 transition">
              <FaInstagram />
            </a>
            <a className="p-2 rounded-full bg-orange-800 hover:bg-orange-700 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>

  )
}
export default Least