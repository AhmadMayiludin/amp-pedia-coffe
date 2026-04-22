import React from 'react';

const BundlingSummary = ({ selectedItems, onRemove, onClear, isMobile }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const totalOriginal = selectedItems.reduce((sum, item) => sum + item.originalPrice, 0);
  const isEligible = totalOriginal >= 50000;
  const bundlingPrice = isEligible ? totalOriginal * 0.72 : totalOriginal;
  const savings = totalOriginal - bundlingPrice;

  const formatPrice = (price) => {
    return 'Rp' + new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleOrder = () => {
    const itemNames = selectedItems.map(item => `- ${item.name} (${item.size.charAt(0).toUpperCase() + item.size.slice(1)})`).join('%0A');
    const message = `Halo amp-pedia, saya ingin memesan Paket Bundling:%0A%0A${itemNames}%0A%0ATotal Harga: ${formatPrice(bundlingPrice)}%0A(Hemat ${formatPrice(savings)})`;
    window.open(`https://wa.me/6285694352247?text=${message}`, '_blank');
  };

  if (isMobile) {
    if (selectedItems.length === 0) return null;

    return (
      <div className="bg-[#2C1810] text-white rounded-3xl p-4 shadow-2xl border border-[#A67C52]/30">
        <div className="flex items-center justify-between">
          <div onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
            <span className="text-[10px] text-[#D4A373] font-bold uppercase tracking-widest">{selectedItems.length} Item terpilih</span>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black">{formatPrice(bundlingPrice)}</span>
              <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <span className="text-[9px] text-green-400 font-bold italic">-28% BERHASIL!</span>
          </div>
          <button
            disabled={!isEligible}
            onClick={handleOrder}
            className={`px-6 py-3 rounded-xl font-bold text-xs transition-all ${
              isEligible ? 'bg-[#25D366] text-white' : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isEligible ? 'Order WA' : `Kurang ${formatPrice(50000 - totalOriginal)}`}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-white/10 max-h-60 overflow-y-auto custom-scrollbar">
            {selectedItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="text-xs">
                  <span className="block font-bold">{item.name}</span>
                  <span className="text-[10px] text-gray-400 uppercase">{item.size}</span>
                </div>
                <button onClick={() => onRemove(index)} className="text-red-400 p-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl border border-[#A67C52]/10 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold text-gray-900">Summary</h2>
        <button 
          onClick={onClear}
          className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
        {selectedItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4 opacity-20">👈</div>
            <p className="text-gray-400 text-sm font-medium">Ketuk menu di kiri untuk<br/>menambah ke bundling</p>
          </div>
        ) : (
          selectedItems.map((item, index) => (
            <div key={`${item.id}-${item.size}-${index}`} className="flex items-center justify-between group">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900">{item.name}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">{item.size}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-600">{formatPrice(item.originalPrice)}</span>
                <button 
                  onClick={() => onRemove(index)}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-dashed border-gray-200 pt-6 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Total Harga Asli</span>
          <span className="font-bold text-gray-900">{formatPrice(totalOriginal)}</span>
        </div>

        {isEligible ? (
          <>
            <div className="flex justify-between items-center text-sm text-green-600">
              <span className="font-bold italic">Diskon Bundling (-28%)</span>
              <span className="font-bold italic">-{formatPrice(savings)}</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <span className="text-lg font-extrabold text-gray-900">Total Akhir</span>
              <span className="text-2xl font-extrabold text-[#A67C52]">{formatPrice(bundlingPrice)}</span>
            </div>
          </>
        ) : (
          <div className="bg-[#A67C52]/5 border border-[#A67C52]/20 rounded-2xl p-4 mt-2 text-center">
            <p className="text-[10px] text-[#A67C52] font-bold uppercase tracking-widest mb-1">Syarat Bundling</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Min. <span className="font-bold text-[#A67C52]">Rp50.000</span> untuk diskon 20%. 
              <br/>Butuh <span className="font-bold">{formatPrice(50000 - totalOriginal)}</span> lagi.
            </p>
          </div>
        )}
      </div>

      <button
        disabled={!isEligible}
        onClick={handleOrder}
        className={`w-full mt-8 py-4 rounded-2xl font-extrabold transition-all duration-300 flex items-center justify-center gap-3 ${
          isEligible 
            ? 'bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-[1.02] shadow-lg shadow-green-200' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Pesan di WhatsApp
      </button>
    </div>
  );
};

export default BundlingSummary;
