# Juice E-Commerce App

A full-stack MERN application for a juice e-commerce platform with user authentication, product management, shopping cart, and order processing.

## Features

- 🛍️ **Product Management**: Browse and filter juices by category
- 🛒 **Shopping Cart**: Add, remove, and update items in cart
- 👤 **User Authentication**: Register and login with JWT authentication
- 📦 **Order Management**: Create and track orders
- 🎨 **Interactive UI**: Modern, responsive design with loading states
- 🔒 **Secure API**: Protected routes with authentication middleware

## Tech Stack

### Frontend
- React 19
- Redux Toolkit (RTK Query)
- React Router
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs for password hashing

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── juices/          # Juice CRUD operations
│   │   ├── users/           # User authentication
│   │   ├── orders/          # Order management
│   │   └── middleware/      # Auth middleware
│   ├── app.js
│   └── package.json
│
└── trial-254/               # Frontend React app
    ├── src/
    │   ├── components/      # Reusable components
    │   ├── pages/          # Page components
    │   ├── redux/          # State management
    │   ├── routers/        # Route configuration
    │   └── utils/          # Utility functions
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
PORT=3000
DB_URL=mongodb://localhost:27017/juice-app
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

5. Start the backend server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd trial-254
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or next available port)

## API Endpoints

### Juices
- `GET /api/juices` - Get all juices
- `GET /api/juices/:id` - Get single juice
- `POST /api/juices/create-juice` - Create juice (admin)
- `PUT /api/juices/edit/:id` - Update juice (admin)
- `DELETE /api/juices/:id` - Delete juice (admin)

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Orders
- `POST /api/orders/create` - Create order (protected)
- `GET /api/orders/my-orders` - Get user orders (protected)
- `GET /api/orders/:id` - Get single order (protected)

## Usage

1. **Start MongoDB**: Make sure MongoDB is running locally or use MongoDB Atlas
2. **Start Backend**: Run `npm run dev` in the backend directory
3. **Start Frontend**: Run `npm run dev` in the trial-254 directory
4. **Access App**: Open `http://localhost:5173` in your browser

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 3000)
- `DB_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

## Development Notes

- The frontend uses RTK Query for API calls
- Cart state is managed with Redux
- Authentication tokens are stored in localStorage
- Backend uses JWT for authentication
- Passwords are hashed with bcryptjs

## Troubleshooting

1. **Backend won't start**: Check if MongoDB is running and DB_URL is correct
2. **Frontend can't connect**: Ensure backend is running on port 3000
3. **CORS errors**: Check backend CORS configuration in `app.js`
4. **Authentication fails**: Verify JWT_SECRET is set in `.env`

## License

ISC

