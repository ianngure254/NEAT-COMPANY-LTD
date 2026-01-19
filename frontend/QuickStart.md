# Quick Start Guide

Follow these steps to get your Juice E-Commerce App running:

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install:
- express
- mongoose
- cors
- dotenv
- jsonwebtoken
- bcryptjs
- nodemon

## Step 2: Setup Backend Environment

1. Create a `.env` file in the `backend` directory
2. Copy the content from `backend/ENV_SETUP.md` or use:

```env
PORT=3000
DB_URL=mongodb://localhost:27017/juice-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

**Important**: 
- Make sure MongoDB is running on your system
- Or update `DB_URL` with your MongoDB Atlas connection string
- Change `JWT_SECRET` to a strong random string

## Step 3: Start Backend Server

```bash
# In the backend directory
npm run dev
```

You should see:
```
MongoDB connected successfully!
The server is listening on http://localhost:3000
```

## Step 4: Install Frontend Dependencies

Open a new terminal and navigate to the frontend:

```bash
cd trial-254
npm install
```

## Step 5: Start Frontend Development Server

```bash
# In the trial-254 directory
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

## Step 6: Access the Application

Open your browser and go to: `http://localhost:5173`

## Troubleshooting

### Backend Issues

1. **MongoDB Connection Error**
   - Make sure MongoDB is running: `mongod` or start MongoDB service
   - Check your `DB_URL` in `.env` file
   - For MongoDB Atlas, ensure your IP is whitelisted

2. **Port Already in Use**
   - Change `PORT` in `.env` to a different port (e.g., 3001)
   - Update `base.URL.js` in frontend to match the new port

3. **Module Not Found**
   - Run `npm install` again in the backend directory
   - Check if `node_modules` folder exists

### Frontend Issues

1. **Cannot Connect to Backend**
   - Ensure backend is running on port 3000
   - Check `trial-254/src/utils/base.URL.js` matches your backend URL
   - Check browser console for CORS errors

2. **Products Not Loading**
   - Verify backend is running
   - Check browser Network tab for API errors
   - Ensure MongoDB has data (you may need to seed initial data)

## Next Steps

1. **Seed Initial Data**: Create some juice products via the API or directly in MongoDB
2. **Test Authentication**: Register a new user and login
3. **Test Cart**: Add items to cart and proceed to checkout
4. **Create Orders**: Complete an order to test the order flow

## API Testing

You can test the API using:
- Postman
- curl
- Browser (for GET requests)

Example:
```bash
# Get all juices
curl http://localhost:3000/api/juices

# Register a user
curl -X POST http://localhost:3000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

## Development Tips

- Backend auto-reloads with `nodemon` when using `npm run dev`
- Frontend hot-reloads automatically with Vite
- Check browser console and terminal for errors
- Use Redux DevTools for state debugging

Happy coding! 🚀

