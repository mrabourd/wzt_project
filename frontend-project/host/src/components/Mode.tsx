
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// --- Mode ---
export default function Mode ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) {
  return (
    <header className="fixed top-0 right-0 left-72 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-6 z-10 transition-colors">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:ring-2 ring-blue-500 transition-all"
        title="Toggle Dark Mode"
      >
        {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
      </button>
      <div className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        System Status: <span className="text-green-500 font-bold">Online</span>
      </div>
    </header>
  );
};