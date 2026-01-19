
import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Search, Filter, ChevronDown, MapPin, Phone } from 'lucide-react';
import { MdPhoneInTalk } from "react-icons/md";
   import { HiOutlineMail } from "react-icons/hi";

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 'ORD-2401',
      status: 'delivered',
      date: '2026-01-08',
      time: '10:30 AM',
      items: [
        { name: 'Orange Blast', qty: 2, price: 5.99 },
        { name: 'Berry Smoothie', qty: 1, price: 6.99 }
      ],
      total: 18.97,
      address: '123 Main Street, Nairobi',
      phone: '+254 712 345 678',
      email: '74@gmail.com'
    },
    {
      id: 'ORD-2402',
      status: 'processing',
      date: '2026-01-08',
      time: '11:45 AM',
      items: [
        { name: 'Tropical Paradise', qty: 3, price: 7.49 },
        { name: 'Green Detox', qty: 1, price: 8.99 }
      ],
      total: 31.46,
      address: '456 Valley Road, Westlands',
      phone: '+254 723 456 789',
      email: '734@gmail.com'
    },
    {
      id: 'ORD-2403',
      status: 'pending',
      date: '2026-01-08',
      time: '12:15 PM',
      items: [
        { name: 'Mango Tango', qty: 1, price: 6.49 },
        { name: 'Passion Punch', qty: 2, price: 5.99 }
      ],
      total: 18.47,
      address: '789 Palm Avenue, Karen',
      phone: '+254 734 567 890',
      email: '347@gmail.com'
    },
    {
      id: 'ORD-2404',
      status: 'cancelled',
      date: '2026-01-07',
      time: '03:20 PM',
      items: [
        { name: 'Watermelon Wave', qty: 2, price: 5.49 }
      ],
      total: 10.98,
      address: '321 Ocean Drive, Kilimani',
      phone: '+254 745 678 901',
      email: '842@gmail.com'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="w-5 h-5" />;
      case 'processing': return <Clock className="w-5 h-5 animate-spin" />;
      case 'pending': return <Package className="w-5 h-5" />;
      case 'cancelled': return <XCircle className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab;
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const stats = {
    all: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-green-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your juice orders</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search orders or items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all font-medium">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['all', 'pending', 'processing', 'delivered', 'cancelled'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-linear-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="ml-2 px-2 py-0.5 bg-white bg-opacity-20 rounded-full text-sm">
                {stats[tab]}
              </span>
            </button>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order, idx) => (
            <div
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Order Header */}
              <div className="bg-linear-to-r from-orange-500 to-yellow-500 p-4 text-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{order.id}</h3>
                    <p className="text-sm opacity-90">{order.date} • {order.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-4">
                <div className="space-y-2 mb-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                      </div>
                      <p className="font-semibold text-orange-600">${item.price}</p>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-3 border-t-2 border-gray-200">
                  <span className="text-gray-600 font-medium">Total</span>
                  <span className="text-2xl font-bold text-gray-800">${order.total.toFixed(2)}</span>
                </div>

                {/* Quick Info */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    
                <MdPhoneInTalk  className='"w-4 h-4 mt-0.5 shrink-0'/>
                    <p className='line-clamp-1'>{order.phone}</p>
                 
          <HiOutlineMail  className='w-4 h-4 mt-0.5 shrink-0'/>
                    <p className='line-clamp-1'>{order.email}</p>
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="line-clamp-1">{order.address}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders found</h3>
            <p className="text-gray-500">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedOrder(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-linear-to-r from-orange-500 to-yellow-500 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{selectedOrder.id}</h2>
                    <p className="opacity-90">{selectedOrder.date} • {selectedOrder.time}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className={`flex items-center gap-3 p-4 rounded-xl border ${getStatusColor(selectedOrder.status)}`}>
                  {getStatusIcon(selectedOrder.status)}
                  <div>
                    <p className="font-semibold">Order Status</p>
                    <p className="text-sm opacity-75">{selectedOrder.status.toUpperCase()}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3 text-gray-800">Order Items</h3>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                        </div>
                        <p className="font-semibold text-orange-600">${item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total Amount</span>
                    <span className="text-2xl font-bold text-orange-600">${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Delivery Address</p>
                      <p className="text-gray-600">{selectedOrder.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Contact Number</p>
                      <p className="text-gray-600">{selectedOrder.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-linear-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                    Track Order
                  </button>
                  <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
 