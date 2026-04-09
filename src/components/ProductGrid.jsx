import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 px-6 py-4 max-w-7xl mx-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onProductClick} />
      ))}
      
      {products.length === 0 && (
        <div className="col-span-full py-20 text-center">
          <p className="text-gray-400">No items found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
