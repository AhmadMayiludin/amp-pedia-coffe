import React from 'react';

const ProductCard = ({ product, onClick }) => {
  const formatPrice = (price) => {
    return 'Rp' + new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="bg-white p-2 transition-all duration-300 group flex flex-col h-full items-center text-center cursor-pointer active:scale-95"
      onClick={() => onClick(product)}
    >
      {/* Product Image — full, no cropping */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl bg-white mb-3 mx-auto flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center w-full">
        <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-1 leading-tight tracking-tight px-1">
          {product.name}
        </h3>
        
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold text-gray-900 leading-none">
            {formatPrice(product.regular.promo)}
          </span>
          <span className="text-[10px] text-gray-400 line-through mt-0.5">
            {formatPrice(product.regular.original)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
