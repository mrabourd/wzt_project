import './App.css';
import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Sidebar from './components/Sidebar';
import Mode from './components/Mode';

const RemoteResourceList = React.lazy(() => import('addresses/ResourceList'));

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Sidebar />
        <Mode darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div className="flex-grow ml-72 flex flex-col">
          
          <main className="p-8 mt-16"> {/* mt-16 pour compenser la hauteur du header */}
            <Suspense fallback={<div className="p-10 text-gray-400">Loading layout...</div>}>
              <Routes>
                <Route path="/" element={
                  <div className="p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome!</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Select a category in the menu to start.</p>
                  </div>
                } />
                
                <Route path="/addresses" element={
                  <ErrorBoundary fallback={<div className="p-6 bg-red-50 text-red-700 rounded-lg">Error...</div>}>
                    <Suspense fallback={<div className="p-10 text-blue-600 animate-pulse">Loading Remote...</div>}>
                      <RemoteResourceList />
                    </Suspense>
                  </ErrorBoundary>
                } />
                
                <Route path="/arriving" element={<div className="p-10 text-gray-400 italic dark:text-gray-500">Not ready yet</div>} />
                <Route path="/procedures" element={<div className="p-10 text-gray-400 italic dark:text-gray-500">Not ready yet</div>} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;