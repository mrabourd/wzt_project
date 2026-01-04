import type { CategoryMenuProps } from '../types/CategoryMenuProps';

const CATEGORIES = [
  { id: 'all', label: 'All Resources' },
  { id: 'food', label: 'Food' },
  { id: 'showers', label: 'Showers' },
  { id: 'day centres', label: 'Day Centres' },
];

export const CategoryMenu: React.FC<CategoryMenuProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <nav className="w-64 bg-gray-700/10 border-r h-screen fixed left-0 p-6 shadow-sm">
      <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
        Categories
      </h2>
      <ul className="space-y-2">
        {CATEGORIES.map((cat) => (
          <li key={cat.id}>
            <button
              onClick={() => onCategoryChange(cat.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                activeCategory === cat.id
                  ? 'bg-red-600 dark:bg-red-60 text-white shadow-md transform scale-105'
                  : 'text-gray-60/200 hover:bg-gray-600/50'
              }`}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};