export type Category = 'All' | 'Electronics' | 'Fashion' | 'Shoes' | 'Accessories' | 'Home';

export interface Product {
  id: string;
  name: string;
  category: 'Electronics' | 'Fashion' | 'Shoes' | 'Accessories' | 'Home';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'cod' | 'card';
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  subtotal: number;
  shipping: number;
  total: number;
  date: string;
  estimatedDelivery: string;
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
}

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}
