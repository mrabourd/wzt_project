import React from 'react';
import type { CategoryMenuProps } from '../types/CategoryMenuProps';
import { ChevronLeft, Heart, Utensils, Bath, User, Stethoscope } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Resources', icon: Heart  },
  { id: 'food', label: 'Food', icon: Utensils },
  { id: 'showers', label: 'Showers', icon: Bath },
  { id: 'day centres', label: 'Day Centres', icon: User },
  { id: 'healthcare', label: 'Healthcare', icon: Stethoscope },
];

const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(' ');

export const CategoryMenu: React.FC<CategoryMenuProps> = ({ activeCategory, onCategoryChange, isOpen, onToggle }) => {
return (
    <aside
      className={cn(
        'fixed top-16 z-40 flex h-screen flex-col border-r bg-white dark:bg-gray-800 transition-all duration-300',
        isOpen ? 'w-48 sm:w-64' : 'w-20',
        'overflow-visible' 
      )}
    >
      {/* Navigation */}
      <nav className="mt-6 flex-1 px-3 flex-1 px-2 sm:px-3 relative">
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onToggle();
          }}
          aria-label="Toggle Sidebar"
          className="absolute -right-3 top-5 z-50 cursor-pointer rounded-full border border-gray-200 bg-white p-1 text-gray-600 hover:bg-gray-50 shadow-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 pointer-events-auto"        >
          <ChevronLeft
            className={cn('h-4 w-4 transition-transform duration-300', !isOpen && 'rotate-180')}
          />
        </button>
        <h2 className={cn(
          "mb-4 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider transition-opacity",
          !isOpen && "opacity-0"
        )}>
          Categories
        </h2>
        
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <li key={cat.id}>
                <button
                  onClick={() => onCategoryChange(cat.id)}
                  className={cn(
                    'group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200',
                    isActive 
                      ? 'bg-guide-blue text-white shadow-md' 
                      : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                  
                  <span className={cn(
                    'font-medium transition-opacity duration-300 whitespace-nowrap',
                    !isOpen && 'opacity-0 w-0'
                  )}>
                    {cat.label}
                  </span>

                  {/* Tooltip when menu is small */}
                  {!isOpen && (
                    <div className="absolute left-14 invisible group-hover:visible bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
                      {cat.label}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Optionnel */}
      <div className="border-t border-gray-100 dark:border-gray-700 p-4">
        <div className={cn(
          "text-xs text-gray-400 transition-opacity",
          !isOpen && "opacity-0"
        )}>
          © 2026 Paris Guide
        </div>
      </div>
    </aside>
  );
};