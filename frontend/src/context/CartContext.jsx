import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { fetchProducts } from "../services/productService"

const CartContext = createContext(undefined)

const persistKey = "cartItems"

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem(persistKey)
    return stored ? JSON.parse(stored) : []
  })
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch products from backend on mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data)
        setError(null)
      } catch (err) {
        console.error('Failed to load products:', err)
        setError('Failed to load products from server')
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  useEffect(() => {
    localStorage.setItem(persistKey, JSON.stringify(items))
  }, [items])

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + (product.quantity || 1) } : item,
        )
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }]
    })
  }

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id))
  const clearCart = () => setItems([])

  const totals = useMemo(() => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const count = items.reduce((acc, item) => acc + item.quantity, 0)
    return { subtotal, count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      products,
      loading,
      error,
      totals,
      addToCart,
      updateQty,
      removeItem,
      clearCart,
    }),
    [items, products, loading, error, totals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

export default CartProvider


