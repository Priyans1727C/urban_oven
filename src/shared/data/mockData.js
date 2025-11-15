// Mock data for menu items - replace with API calls
import { Percent, Gift, Zap } from 'lucide-react';


export const mockMenuItems = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms, black truffle, and aged Parmesan cheese",
    price: 28,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    rating: 4.8,
    category: "Italian",
    isVegetarian: true,
    isSpicy: false,
    prepTime: "25-30 min",
    servings: 2,
  },
  {
    id: 2,
    name: "Wagyu Beef Tenderloin",
    description: "Premium Japanese Wagyu served with roasted vegetables and red wine reduction",
    price: 65,
    image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    rating: 4.9,
    category: "Steakhouse",
    isVegetarian: false,
    isSpicy: false,
    prepTime: "20-25 min",
    servings: 1,
  },
  {
    id: 3,
    name: "Spicy Tuna Tataki",
    description: "Seared tuna with sesame crust, wasabi aioli, and pickled vegetables",
    price: 32,
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    rating: 4.7,
    category: "Japanese",
    isVegetarian: false,
    isSpicy: true,
    prepTime: "15-20 min",
    servings: 1,
  },
  {
    id: 4,
    name: "Lobster Thermidor",
    description: "Fresh Maine lobster in creamy cognac sauce with gruyere cheese gratin",
    price: 48,
    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
    rating: 4.6,
    category: "French",
    isVegetarian: false,
    isSpicy: false,
    prepTime: "30-35 min",
    servings: 1,
  },
  {
    id: 5,
    name: "Mediterranean Quinoa Bowl",
    description: "Organic quinoa with roasted vegetables, feta cheese, and tahini dressing",
    price: 22,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    rating: 4.5,
    category: "Healthy",
    isVegetarian: true,
    isSpicy: false,
    prepTime: "15-20 min",
    servings: 1,
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, vanilla ice cream, and berry compote",
    price: 16,
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    rating: 4.9,
    category: "Dessert",
    isVegetarian: true,
    isSpicy: false,
    prepTime: "12-15 min",
    servings: 1,
  },
];


export const mockCategories = [
  {
    name: 'Pizzas',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Biryani',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Momos',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Cakes',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Noodles',
    image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Tea',
    image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Chole Bhature',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Burgers',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Pasta',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Sandwiches',
    image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Ice Cream',
    image: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  },
  {
    name: 'Salads',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',

  }
];


export const mockBannerSlides = [
  {
    id: 1,
    title: "Buy 2 Get 1 FREE",
    subtitle: "Order any 2 pizzas and get the 3rd one absolutely free",
    offer: "BUY 2 GET 1",
    code: "PIZZA321",
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gradient: "from-orange-600 via-red-500 to-pink-500",
    icon: Gift
  },
  {
    id: 2,
    title: "50% OFF First Order",
    subtitle: "New customers get 50% discount on their first order",
    offer: "50% OFF",
    code: "WELCOME50",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gradient: "from-green-600 via-emerald-500 to-teal-500",
    icon: Percent
  },

  {
    id: 3,
    title: "Flash Sale - 30% OFF",
    subtitle: "Limited time offer on all menu items. Hurry up!",
    offer: "30% OFF",
    code: "FLASH30",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gradient: "from-purple-600 via-pink-500 to-red-500",
    icon: Zap
  },
  {
    id: 4,
    title: "Buy 2 Get 1 FREE",
    subtitle: "Order any 2 pizzas and get the 3rd one absolutely free",
    offer: "BUY 2 GET 1",
    code: "PIZZA321",
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gradient: "from-orange-600 via-red-500 to-pink-500",
    icon: Gift
  }
];


export const mockFavoritesItems = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs",
    price: 24.99,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    rating: 4.8,
    category: "Seafood",
    isVegetarian: false,
    isSpicy: false,
    prepTime: "20 min",
    servings: 1,
    addedAt: new Date().toISOString()
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella",
    price: 18.50,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    rating: 4.6,
    category: "Italian",
    isVegetarian: true,
    isSpicy: false,
    prepTime: "15 min",
    servings: 1,
    addedAt: new Date().toISOString()
  },
  {
    id: 3,
    name: "Chicken Tikka",
    description: "Spicy marinated chicken pieces",
    price: 22.00,
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    rating: 4.9,
    category: "Indian",
    isVegetarian: false,
    isSpicy: true,
    prepTime: "25 min",
    servings: 1,
    addedAt: new Date().toISOString()
  }
];