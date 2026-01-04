import { useState } from 'react';
import { CategoryMenu } from './../components/CategoryMenu';
import { ResourceList } from './../components/ResourceList';

const AddressPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="flex bg-gray-750/20 min-h-screen relative">
      {/* Category */}
      <CategoryMenu 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      {/* Main page */}
      <main className={`flex-1 p-8 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-50/800 capitalize">
            {activeCategory.toLowerCase()} Resources
          </h1>
        </header>
        
        <ResourceList category={activeCategory} />
      </main>
    </div>
  );
};

export default AddressPage;