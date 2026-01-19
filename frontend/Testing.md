# Testing Checklist

## Backend Testing

### 1. Server Startup
- [ ] Backend starts without errors
- [ ] MongoDB connection successful
- [ ] Server listening on correct port
- [ ] No dotenv warnings

### 2. API Endpoints

#### Juices API
- [ ] `GET /api/juices` - Returns all juices
- [ ] `GET /api/juices/:id` - Returns single juice
- [ ] `POST /api/juices/create-juice` - Creates new juice
- [ ] `PUT /api/juices/edit/:id` - Updates juice
- [ ] `DELETE /api/juices/:id` - Deletes juice

#### Users API
- [ ] `POST /api/users/register` - Registers new user
- [ ] `POST /api/users/login` - Logs in user
- [ ] `GET /api/users/profile` - Gets user profile (with auth token)
- [ ] `PUT /api/users/profile` - Updates profile (with auth token)

#### Orders API
- [ ] `POST /api/orders/create` - Creates order (with auth token)
- [ ] `GET /api/orders/my-orders` - Gets user orders (with auth token)
- [ ] `GET /api/orders/:id` - Gets single order (with auth token)

### 3. Error Handling
- [ ] 404 errors return proper JSON
- [ ] 500 errors return proper JSON
- [ ] Invalid requests handled gracefully
- [ ] Authentication errors return 401/403

## Frontend Testing

### 1. Application Startup
- [ ] App loads without errors
- [ ] No console errors
- [ ] AuthContext initializes correctly
- [ ] Redux store initializes correctly

### 2. Navigation
- [ ] Home page loads
- [ ] Products page loads
- [ ] Cart page loads
- [ ] Dashboard loads
- [ ] Navigation links work
- [ ] Back button works

### 3. Products Page
- [ ] Products load from API
- [ ] Loading state displays
- [ ] Error state displays on failure
- [ ] Search functionality works
- [ ] Category filters work
- [ ] Products display correctly
- [ ] Add to cart button works

### 4. Cart Functionality
- [ ] Items added to cart
- [ ] Cart badge updates
- [ ] Cart page shows items
- [ ] Quantity can be increased
- [ ] Quantity can be decreased
- [ ] Items can be removed
- [ ] Total price calculates correctly
- [ ] Empty cart message displays

### 5. Dashboard
- [ ] Dashboard loads
- [ ] Stats display correctly
- [ ] Quick action buttons work
- [ ] Recent products display
- [ ] Add product form works
- [ ] Orders page loads

### 6. Authentication (if implemented)
- [ ] Register form works
- [ ] Login form works
- [ ] Logout works
- [ ] Protected routes redirect when not logged in
- [ ] User data persists

## Integration Testing

### 1. Full User Flow
- [ ] Browse products
- [ ] Add items to cart
- [ ] View cart
- [ ] Update quantities
- [ ] Remove items
- [ ] Navigate to dashboard
- [ ] View statistics

### 2. API Integration
- [ ] Frontend connects to backend
- [ ] CORS works correctly
- [ ] API calls succeed
- [ ] Error responses handled
- [ ] Loading states work

## Browser Testing

Test in multiple browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Responsive Testing

Test on different screen sizes:
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1920px)

## Performance Testing

- [ ] Page load time < 3 seconds
- [ ] API responses < 1 second
- [ ] No memory leaks
- [ ] Smooth animations

## Security Testing

- [ ] No sensitive data in console
- [ ] API keys not exposed
- [ ] Authentication tokens secure
- [ ] CORS properly configured

## Quick Test Commands

### Backend
```bash
# Test server starts
cd backend && npm start

# Test API endpoints
curl http://localhost:3000/api/juices
```

### Frontend
```bash
# Test build
cd trial-254 && npm run build

# Test dev server
cd trial-254 && npm run dev
```

## Common Issues to Check

1. **CORS Errors**: Check backend CORS configuration
2. **API Connection**: Verify base URL is correct
3. **Environment Variables**: Ensure all are set
4. **MongoDB Connection**: Verify connection string
5. **Port Conflicts**: Ensure ports are available

## Post-Testing

After all tests pass:
- [ ] Document any issues found
- [ ] Fix critical bugs
- [ ] Update documentation
- [ ] Prepare for deployment



