import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// --- Mode ---
export default function Mode ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (val: boolean) => void }) {
  return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full 
                 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 
                 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
        title="Toggle Dark Mode"
      >
        {darkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-500" />
          ) : (
            <MoonIcon className="w-5 h-5 text-blue-500" />
          )}
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider">
          {darkMode ? 'Light' : 'Dark'}
        </span>
      </button>
  );
};