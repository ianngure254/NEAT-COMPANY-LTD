import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Package, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Edit,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState('today');

  // Mock data - replace with API calls
  const stats = {
    totalRevenue: 12450.75,
    revenueChange: 12.5,
    totalOrders: 342,
    ordersChange: 8.3,
    totalProducts: 24,
    productsChange: 2,
    totalCustomers: 1289,
    customersChange: 15.2
  };

  const recentOrders = [
    {
      id: 'ORD-2401',
      customer: 'John Doe',
      items: 3,
      total: 18.97,
      status: 'delivered',
      time: '2 hours ago'
    },
    {
      id: 'ORD-2402',
      customer: 'Jane Smith',
      items: 2,
      total: 31.46,
      status: 'processing',
      time: '4 hours ago'
    },
    {
      id: 'ORD-2403',
      customer: 'Mike Johnson',
      items: 4,
      total: 24.50,
      status: 'pending',
      time: '6 hours ago'
    },
    {
      id: 'ORD-2404',
      customer: 'Sarah Williams',
      items: 1,
      total: 8.99,
      status: 'delivered',
      time: '8 hours ago'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'processing': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'pending': return <AlertCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const statCards = [
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      change: stats.revenueChange,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      change: stats.ordersChange,
      icon: ShoppingCart,
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Total Products',
      value: stats.totalProducts,
      change: stats.productsChange,
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toLocaleString(),
      change: stats.customersChange,
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const quickActions = [
    { label: 'Add New Product', icon: Plus, path: '/dashboard/products/add', color: 'bg-linear-to-r from-orange-500 to-yellow-500' },
    { label: 'Manage Products', icon: Edit, path: '/dashboard/products', color: 'bg-linear-to-r from-blue-500 to-cyan-500' },
    { label: 'View Analytics', icon: BarChart3, path: '/dashboard/analytics', color: 'bg-linear-to-r from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-green-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.name || 'Owner'}!
          </h1>
          <p className="text-gray-600">Here's what's happening with your business today</p>
        </div>

        {/* Time Range Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['today', 'week', 'month', 'year'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-6 py-2 rounded-xl font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                timeRange === range
                  ? 'bg-linear-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, idx) => {
            const Icon = stat.icon;
            const isPositive = stat.change > 0;
            return (
              <div
                key={stat.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`bg-linear-to-r ${stat.color} p-6 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor} bg-opacity-20`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-white bg-opacity-20 ${
                      isPositive ? 'text-green-100' : 'text-red-100'
                    }`}>
                      {isPositive ? (
                        <ArrowUpRight className="w-3 h-3" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3" />
                      )}
                      {Math.abs(stat.change)}%
                    </div>
                  </div>
                  <h3 className="text-sm opacity-90 mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-xs text-gray-600">
                    {isPositive ? 'Increased' : 'Decreased'} by {Math.abs(stat.change)}% from last period
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className={`${action.color} text-white p-6 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 flex items-center gap-4`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-semibold text-lg">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Orders & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Orders</h2>
              <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order, idx) => (
                <div
                  key={order.id}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-800">{order.id}</h3>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                    <div className="text-sm text-gray-600">
                      {order.items} {order.items === 1 ? 'item' : 'items'} • {order.time}
                    </div>
                    <div className="font-bold text-orange-600">${order.total.toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Chart Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Revenue Overview</h2>
              <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                View Details →
              </button>
            </div>
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-dashed border-orange-200">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                <p className="text-gray-600 font-medium">Revenue Chart</p>
                <p className="text-sm text-gray-500 mt-1">Visual analytics coming soon</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Average Order Value</p>
                <p className="text-2xl font-bold text-gray-800">$36.40</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-800">3.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-100 rounded-xl">
                <Package className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Low Stock Items</p>
                <p className="text-2xl font-bold text-gray-800">5</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-100 rounded-xl">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-100 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Today</p>
                <p className="text-2xl font-bold text-gray-800">28</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



