import type { CategoryMenuProps } from '../types/CategoryMenuProps';
import { ChevronLeft } from 'lucide-react';
import { CATEGORIES } from '../constants/Categories';

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export const CategoryMenu = ({ 
  activeCategory, 
  onCategoryChange, 
  isOpen, 
  onToggle 
}: CategoryMenuProps) => {
  return (
    <aside
      className={cn(
        'fixed top-16 left-0 z-40 flex h-[calc(100vh-64px)] flex-col bg-white dark:bg-gray-800 transition-all duration-300 border-r border-gray-100 dark:border-gray-700',
        isOpen ? 'w-54 sm:w-64' : 'w-20'
      )}
    >
      <nav className="mt-6 flex-1 px-3 relative">
        
        {/* Toggle Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="absolute -right-3 top-1 z-50 cursor-pointer rounded-full border border-gray-200 p-1 text-white bg-guide-blue shadow-md dark:border-gray-600 pointer-events-auto"
        >
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
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                  )}
                >
                  <Icon 
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2} 
                    className="shrink-0"
                  />
                  
                  <span className={cn(
                    'font-medium transition-all duration-300 whitespace-nowrap overflow-hidden',
                    isOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                  )}>
                    {cat.label}
                  </span>

                  {/* Tooltip visible uniquement quand la sidebar est fermée */}
                  {!isOpen && (
                    <div className="absolute left-16 invisible group-hover:visible bg-gray-900 text-white text-xs rounded-md px-3 py-2 whitespace-nowrap z-50 shadow-xl">
                      {cat.label}
                      {/* Petite flèche du tooltip */}
                      <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-y-4 border-y-transparent border-r-4 border-r-gray-900" />
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};