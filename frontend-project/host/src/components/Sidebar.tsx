import './../App.css';
import { useLocation } from 'react-router-dom';
import type { MenuItem } from '../types/MenuItem';

const menu: MenuItem[] = [
  { name: 'Dashboard', href: '/' },
  { name: 'ARRIVING IN PARIS', href: '/arriving' },
  { name: 'USEFUL ADDRESSES', href: '/addresses' },
  { name: 'PROCEDURES', href: '/procedures' },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- Sidebar ---
export default function Sidebar () {
  const location = useLocation();
  return (
    <nav className="w-72 h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col fixed left-0 top-0 transition-colors">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-black text-blue-700 dark:text-blue-500 tracking-tighter">GUIDE PARIS</h1>
      </div>
      <div className="flex-1 overflow-y-auto space-y-1 px-2 pt-4">
        {menu.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                isActive 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900',
                'block rounded-md px-3 py-2 text-base font-medium transition-colors'
              )}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
