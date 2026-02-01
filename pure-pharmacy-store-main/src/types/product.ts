export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  dosage: string;
  presentation: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  warnings: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  certifications: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
}
