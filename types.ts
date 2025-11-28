export interface Benefit {
  id: number;
  title: string;
  description: string;
  iconName: 'TrendingUp' | 'Users' | 'Award' | 'Clock';
}

export interface Module {
  id: number;
  title: string;
  duration: string;
  lessons: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingTier {
  id: number;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}