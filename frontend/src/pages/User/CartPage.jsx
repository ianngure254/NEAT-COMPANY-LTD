import React, { useState } from 'react';
import { Trash2, ShoppingCart, ArrowRight, Plus, Minus } from 'lucide-react';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Orange Blast',
      category: 'Citrus',
      price: 10.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Berry Smoothie',
      category: 'Smoothies',
      price: 9.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Tropical Paradise',
      category: 'Exotic',
      price: 21.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=400&fit=crop'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);


    return(
<div className="min-h-screen bg-gray-50 py-40 px-9">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping cart</h1>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-lg shadow-sm p-16 text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some delicious juices to get started!</p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Continue Shopping →
            </button>
          </div>
        ) : (
          /* Cart Items */
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-6 hover:shadow-md transition-shadow"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Category: <span className="text-gray-700">{item.category}</span>
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm text-gray-600 font-medium">Qty:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="px-4 py-2 font-medium text-gray-800 border-x border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price and Remove */}
                <div className="text-right flex flex-col items-end gap-4">
                  <div className="text-2xl font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium text-sm flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Subtotal and Checkout */}
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-xl font-semibold text-gray-700">Subtotal</span>
                <span className="text-3xl font-bold text-gray-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>

              {/* Checkout Button */}
              <button className="w-full py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Checkout
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Continue Shopping Link */}
              <div className="text-center pt-2">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                  or Continue Shopping →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;


