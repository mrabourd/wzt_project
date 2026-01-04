import type { CategoryMenuProps } from '../types/CategoryMenuProps';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CATEGORIES = [
  { id: 'all', label: 'All Resources' },
  { id: 'food', label: 'Food' },
  { id: 'showers', label: 'Showers' },
  { id: 'day centres', label: 'Day Centres' },
];


export const CategoryMenu: React.FC<CategoryMenuProps> = ({ activeCategory, onCategoryChange, isOpen, onToggle }) => {
return (
    <>
      <button
        onClick={onToggle}
        className={`fixed top-16 z-40 p-2 bg-guide-blue text-white shadow-lg transition-all duration-300 ${
          isOpen ? 'left-64' : 'left-0'
        }`}
      >
        {isOpen ? <ChevronLeftIcon className="w-5 h-5" /> : <ChevronRightIcon className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <nav className={`w-64 bg-white dark:bg-gray-800 backdrop-blur-md border-r h-screen fixed left-0 p-6 shadow-sm transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6 mt-10">
          Categories
        </h2>
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => onCategoryChange(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                  activeCategory === cat.id
                    ? 'bg-guide-blue text-white shadow-md'
                    : 'text-gray-300 hover:bg-guide-blue'
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};