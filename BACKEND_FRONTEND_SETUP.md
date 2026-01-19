# Backend-Frontend Communication Setup Guide

## Overview
Your backend and frontend are now connected! Here's what's been set up:

## What Was Done

### 1. **Backend Fixes** ✅
- Fixed syntax errors in `productRoutes.js`
- Corrected imports and route definitions
- Routes are now properly configured

### 2. **Frontend API Service** ✅
- Created `src/services/api.js` - Main axios instance with:
  - Base URL configured to `http://localhost:3000/api`
  - Request interceptor for auth tokens
  - Response interceptor for error handling
  - 10-second timeout

- Created `src/services/productService.js` - Product API functions:
  - `fetchProducts()` - Get all products
  - `fetchProductById(id)` - Get single product
  - `createProduct(data)` - Create new product (admin)
  - `updateProduct(id, data)` - Update product (admin)
  - `deleteProduct(id)` - Delete product (admin)

### 3. **CartContext Enhanced** ✅
- Now fetches products from backend on mount
- Added loading and error states
- Products available to all components via `useCart()` hook

### 4. **Menu Page Updated** ✅
- Displays all products from backend
- Shows product details (name, description, price, stock)
- Add to cart functionality
- Loading and error states

## How to Run

### Start Backend:
```bash
cd backend
npm install  # if not already done
npm run dev  # or npm start for production
```

The backend should run on: `http://localhost:3000`

### Start Frontend:
```bash
cd frontend
npm run dev
```

The frontend should run on: `http://localhost:5173` (or similar)

## Testing the Connection

1. **Ensure both servers are running**
   - Backend: `http://localhost:3000`
   - Frontend: `http://localhost:5173`

2. **Add test data to MongoDB:**
   ```bash
   # Create a product via the API
   # Use Postman or cURL to POST to http://localhost:3000/api/products/create-product
   ```

3. **Visit the Menu page in your frontend**
   - You should see products loading from the backend
   - Try adding items to cart

## Available Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products/create-product` - Create product (admin)
- `PUT /api/products/edit/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## Using the Cart Hook

In any component:
```jsx
import { useCart } from '../context/CartContext'

const MyComponent = () => {
  const { products, loading, error, addToCart, items, totals } = useCart()
  // Use the data...
}
```

## Next Steps (Optional Enhancements)

1. **Add Order Service:**
   - Create `src/services/orderService.js`
   - Add order creation and management

2. **Add Auth Service:**
   - Create `src/services/authService.js`
   - Handle login, signup, token management

3. **Add Error Boundaries:**
   - Wrap components to handle API errors gracefully

4. **Add Loading Skeletons:**
   - Better UX while data is loading

## Troubleshooting

### "Can't connect to backend"
- Ensure backend is running on port 3000
- Check `baseURL` in `src/services/api.js`
- Check CORS settings in backend `app.js`

### "No products showing"
- Check MongoDB connection
- Add test products to your database
- Open DevTools Console to see API errors

### CORS Errors
- Backend already has CORS enabled
- Ensure `http://localhost:5173` is allowed (frontend dev port)

---

You're all set! The communication channel is open. Start building! 🚀
