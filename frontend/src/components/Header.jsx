import { useState } from "react"
import { GrFormSearch } from "react-icons/gr"
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useCart } from "../context/CartContext"


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { totals } = useCart()

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Product", path: "/product" },
    { label: "Contacts", path: "/contacts" },
  ]

  const userMenuLinks = user
    ? [
        { label: "Dashboard", path: "/dashboard" },
        { label: "CartPage", path: "/CartPage" },
        { label: "Orders", path: "/orders" },
        { label: "Checkout", path: "/checkout" },
        { label: "Log Out", action: "logout" },
      ]
    : [{ label: "Login / Create Account", path: "/login" }]

  const closeMobileMenus = () => {
    setIsOpen(false)
    setIsUserMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsOpen((prev) => {
      const next = !prev
      if (!next) setIsUserMenuOpen(false)
      return next
    })
  }

  const handleLogout = () => {
    logout()
    closeMobileMenus()
    navigate("/logout")
  }

  const renderAvatar = () => {
    if (user?.avatarUrl) {
      return (
        <img
          src={user.avatarUrl}
          alt={user.name || user.email}
          className="h-9 w-9 rounded-full object-cover border border-slate-200"
        />
      )
    }

    if (user?.email) {
      return (
        <div className="h-9 w-9 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">
          {user.email[0]?.toUpperCase()}
        </div>
      )
    }

    return <FaUserCircle className="text-2xl" />
  }

  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50 shadow-sm mb-46">
      
      {/* Top brand strip */}
      <div className="bg-orange-500  ">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-white font-bold text-lg tracking-tight">
            Mawega Fresh & Juice
          </h1>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMobileMenu}
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        {/* Search */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-slate-300 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <GrFormSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className="cursor-pointer hover:text-orange-500 transition"
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li className="relative">
            <button
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-slate-700 hover:text-orange-500 hover:bg-orange-50 transition"
            >
              {renderAvatar()}
              <span className="text-sm font-medium">{user?.name || "Account"}</span>
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-3 w-52 rounded-lg border border-slate-200 bg-white shadow-lg">
                <ul className="py-2">
                  {userMenuLinks.map((link) => (
                    <li key={link.label}>
                      {link.action === "logout" ? (
                        <button
                          type="button"
                          className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition"
                          onClick={handleLogout}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <NavLink
                          to={link.path}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition"
                          onClick={closeMobileMenus}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Cart */}
        <button className="relative p-2 rounded-full hover:bg-orange-50 transition">
          <IoCartOutline className="text-2xl text-slate-700" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {totals?.count || 0}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col divide-y">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  className="block px-6 py-4 text-slate-600 hover:bg-orange-50 hover:text-orange-500 transition cursor-pointer"
                  onClick={closeMobileMenus}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="px-6 py-4">
              <button
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition"
              >
                {renderAvatar()}
                <span className="text-sm font-medium">{user?.name || "Account"}</span>
              </button>
              {isUserMenuOpen && (
                <ul className="mt-3 space-y-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  {userMenuLinks.map((link) => (
                    <li key={link.label}>
                      {link.action === "logout" ? (
                        <button
                          type="button"
                          className="w-full text-left text-sm text-slate-700 hover:text-orange-500 transition"
                          onClick={handleLogout}
                        >
                          {link.label}
                        </button>
                      ) : (
                        <NavLink
                          to={link.path}
                          className="block text-sm text-slate-700 hover:text-orange-500 transition"
                          onClick={closeMobileMenus}
                        >
                          {link.label}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header