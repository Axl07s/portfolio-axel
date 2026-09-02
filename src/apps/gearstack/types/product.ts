export type Category = 
  | 'all'
  | 'monitors'
  | 'keyboards'
  | 'desks'
  | 'chairs'
  | 'audio'
  | 'accessories';

export type Currency = 'USD' | 'EUR';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  asin: string;
  priceUSD: number;
  priceEUR: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  tagline: string;
  bestFor: string;
  scores: {
    ergonomics: number; // 0-100
    buildQuality: number; // 0-100
    performance: number; // 0-100
    value: number; // 0-100
  };
  specs: ProductSpec[];
  pros: string[];
  cons: string[];
  inStock: boolean;
}

export interface SetupRolePreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  productIds: string[];
  totalBudgetUSD: number;
}
