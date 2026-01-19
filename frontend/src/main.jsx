import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'   
import './index.css'
import App from './App.jsx'
import Home from './pages/User/Home'
import Product from './pages/User/Product'
import Contact from './pages/User/Contact'
//import Dashboard from './pages/User/Dashboard'
import CartPage from './pages/User/CartPage'
import Orders from './pages/User/Orders'
import Checkout from './pages/User/Checkout'
import Logout from './pages/User/Logout'
import Auth from './pages/User/Auth'
import AuthProvider from './context/AuthContext'
import CartProvider from './context/CartContext'
import Dashboard from './pages/dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product', element: <Product /> },
      { path: 'contacts', element: <Contact /> },
      { path: 'login', element: <Auth /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'cartpage', element: <CartPage /> },
      { path: 'orders', element: <Orders /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'logout', element: <Logout /> },
     
      

    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
