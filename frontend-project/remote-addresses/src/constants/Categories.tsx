import { Heart, Utensils, Bath, User, Stethoscope, House, Scale } from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', label: 'All Resources', icon: Heart  },
  { id: 'food', label: 'Food', icon: Utensils },
  { id: 'showers', label: 'Showers', icon: Bath },
  { id: 'day centres', label: 'Day Centres', icon: User },
  { id: 'healthcare', label: 'Healthcare', icon: Stethoscope },
  { id: 'free legal aid', label: 'Free Legal Aid', icon: Scale },
  { id: 'domiciliation', label: 'Domiciliation', icon: House },
];