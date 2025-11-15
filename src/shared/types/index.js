// Menu Item Type
export const MenuItemType = {
  id: 'string',
  name: 'string',
  description: 'string',
  price: 'number',
  image: 'string',
  category: 'string',
  rating: 'number',
  prepTime: 'number',
  servings: 'number',
  isVegetarian: 'boolean',
  isSpicy: 'boolean',
  isGlutenFree: 'boolean',
  allergens: 'array',
  nutritionalInfo: 'object',
};

// User Type
export const UserType = {
  id: 'string',
  email: 'string',
  name: 'string',
  avatar: 'string',
  phone: 'string',
  address: 'object',
  preferences: 'object',
  createdAt: 'string',
  updatedAt: 'string',
};

// Cart Item Type
export const CartItemType = {
  id: 'string',
  menuItem: 'object', // MenuItemType
  quantity: 'number',
  customizations: 'array',
  addedAt: 'string',
  totalPrice: 'number',
};

// Order Type
export const OrderType = {
  id: 'string',
  userId: 'string',
  items: 'array', // CartItemType[]
  totalAmount: 'number',
  status: 'string', // 'pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled'
  paymentMethod: 'string',
  deliveryAddress: 'object',
  orderDate: 'string',
  estimatedDeliveryTime: 'string',
};

// API Response Type
export const ApiResponseType = {
  data: 'any',
  message: 'string',
  status: 'number',
  success: 'boolean',
};