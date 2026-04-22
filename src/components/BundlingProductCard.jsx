import React from 'react';

const BundlingProductCard = ({ product, onAdd }) => {
  const formatPrice = (price) => {
    return 'Rp' + new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      onClick={() => onAdd(product, 'regular')}
      className="bg-white border border-gray-100 rounded-3xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer active:scale-95 hover:border-[#A67C52]/30 relative"
    >
      {/* Add Hint */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-6 h-6 bg-[#A67C52] text-white rounded-full flex items-center justify-center text-xs">+</div>
      </div>

      <div className="w-32 h-32 mb-4 relative flex items-center justify-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"; 
            e.target.className = "w-16 h-16 opacity-10 grayscale";
          }}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <h3 className="font-bold text-gray-900 text-[11px] md:text-sm mb-3 px-2 h-10 flex items-center justify-center pointer-events-none leading-tight">
        {product.name}
      </h3>

      <div className="flex flex-col gap-2 w-full mt-auto">
        <div className="flex flex-col items-center justify-center py-2.5 px-3 rounded-2xl bg-[#A67C52]/10 border border-[#A67C52]/20 transition-all duration-200">
          <span className="text-[9px] uppercase tracking-wider text-[#A67C52] font-extrabold mb-0.5">TAP TO ADD</span>
          <span className="text-xs font-black text-gray-900">{formatPrice(product.regular.original)}</span>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product, 'large');
          }}
          className="cursor-pointer flex items-center justify-between py-2 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all duration-200 active:scale-90"
        >
          <span className="text-[10px] font-bold text-gray-400">Large Size</span>
          <span className="text-[10px] font-bold text-[#2C1810]">{formatPrice(product.large.original)}</span>
        </button>
      </div>
    </div>
  );
};

export default BundlingProductCard;
