import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Navbar } from './../components/Navbar';
import { Mode } from './../components/Mode';

import { changeMode } from './../hooks/changeMode'

const AddressModule = React.lazy(() => import('addresses/AddressPage'));
const ProceduresModule = React.lazy(() => import('procedures/ProceduresPage'));

export const Home = () => {
  
  const [ darkMode, setDarkMode ] = changeMode();

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Mode darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <div className="flex-grow flex flex-col"> */}

        <main className="flex-grow pt-16">
          <Suspense fallback={<div className="p-10 text-guide-blue">Loading layout...</div>}>
            <Routes>
              <Route path="/" element={
                <div className="p-10 m-10 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors ">
                  <h2 className="flex justify-center text-3xl font-bold text-guide-title">Welcome!</h2>
                  <p className="flex justify-center italic text-gray-500 dark:text-gray-400 mt-2">Information guide for people in exile, Paris.</p>
                  <p className="flex justify-center text-gray-500 dark:text-gray-400 mt-2">Select a section in the menu.</p>
                </div>
              } />

              <Route path="/addresses" element={
                <ErrorBoundary fallback={<div className="p-6 bg-red-50 text-red-700 rounded-lg">Error...</div>}>
                  <Suspense fallback={<div className="p-10 text-red-600 animate-pulse">Loading Remote...</div>}>
                    <AddressModule />
                  </Suspense>
                </ErrorBoundary>
              } />

              <Route path="/arriving" element={<div className="p-10 text-guide-green italic">Not ready yet</div>} />
              <Route path="/rights" element={<div className="p-10 text-guide-yellow italic">Not ready yet</div>} />
              {/* <Route path="/procedures" element={<div className="p-10 text-guide-red italic">Not ready yet</div>} /> */}
              <Route path="/procedures" element={
                <ErrorBoundary fallback={<div className="p-6 bg-red-50 text-red-700 rounded-lg">Error...</div>}>
                  <Suspense fallback={<div className="p-10 text-red-600 animate-pulse">Loading Remote...</div>}>
                    <ProceduresModule />
                  </Suspense>
                </ErrorBoundary>
              } />
            </Routes>
          </Suspense>
        </main>
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
};

export default Home;