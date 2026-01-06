import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { CATEGORIES } from '../constants/Categories';
import { WhatIsAsylum } from '../pages/WhatIsAsylum';

export const ProceduresPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const currentCategory = CATEGORIES.find(cat => cat.id === activeCategory);

  const renderContent = () => {
    switch (activeCategory) {
      case 'what':
        return <WhatIsAsylum />;
      case 'permits':
        return <div>Contenu des titres de séjour...</div>;
      // Add other pages...
      default:
        return <WhatIsAsylum />;
    }
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Category */}
      <Sidebar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      {/* Main page */}
      <main className={`flex-1 p-8 transition-all duration-300 ${isMenuOpen ? 'ml-48 sm:ml-64' : 'ml-20'}`}>
        <header className="mb-8">
         
            <h1 className="text-3xl font-bold text-gray-50/800 capitalize text-guide-red">
              {currentCategory ? currentCategory.label : 'Resources'}
            </h1>

        </header>
        
        <div className="mt-4">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default ProceduresPage;