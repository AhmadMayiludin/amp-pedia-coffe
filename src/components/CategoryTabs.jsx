import React from 'react';

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
      <div className="flex px-2 min-w-max max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-3 text-sm font-bold transition-all duration-200 whitespace-nowrap border-b-2 ${
              activeCategory === category
                ? 'text-[#A67C52] border-[#A67C52]'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryTabs;
