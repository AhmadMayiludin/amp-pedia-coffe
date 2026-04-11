"use client";

import React, { useEffect } from 'react';

const ProductModal = ({ product, onClose }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!product) return null;

  const formatPrice = (price) => {
    return 'Rp' + new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discountPercent = (original, promo) => {
    return Math.round(((original - promo) / original) * 100);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full sm:max-w-md sm:rounded-3xl rounded-t-3xl overflow-hidden animate-slide-up max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Product Image — full, object-contain */}
        <div className="relative w-full bg-white flex items-center justify-center p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-56 h-56 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-1">{product.name}</h2>
          <p className="text-xs text-gray-400 mb-5">Pilih ukuran yang kamu mau</p>

          {/* Size Options */}
          <div className="space-y-3">
            {/* Regular */}
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#A67C52]/10 rounded-xl flex items-center justify-center">
                  <span className="text-[#A67C52] text-sm font-bold">R</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-900">Regular</span>
                  <p className="text-[10px] text-gray-400">240ml</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 line-through">
                    {formatPrice(product.regular.original)}
                  </span>
                  <span className="text-[9px] bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded-full">
                    -{discountPercent(product.regular.original, product.regular.promo)}%
                  </span>
                </div>
                <span className="text-base font-extrabold text-[#4A2C2A]">
                  {formatPrice(product.regular.promo)}
                </span>
              </div>
            </div>

            {/* Large */}
            <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#A67C52]/10 rounded-xl flex items-center justify-center">
                  <span className="text-[#A67C52] text-sm font-bold">L</span>
                </div>
                <div>
                  <span className="text-sm font-bold text-gray-900">Large</span>
                  <p className="text-[10px] text-gray-400">360ml</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 line-through">
                    {formatPrice(product.large.original)}
                  </span>
                  <span className="text-[9px] bg-red-100 text-red-600 font-bold px-1.5 py-0.5 rounded-full">
                    -{discountPercent(product.large.original, product.large.promo)}%
                  </span>
                </div>
                <span className="text-base font-extrabold text-[#4A2C2A]">
                  {formatPrice(product.large.promo)}
                </span>
              </div>
            </div>
          </div>

          {/* Cara Pesan Info */}
          <div className="mt-6 bg-[#FFF8F0] rounded-2xl p-4 border border-[#A67C52]/15">
            <h4 className="text-xs font-extrabold text-[#4A2C2A] mb-3 uppercase tracking-wider">📋 Cara Pesan (Pick Up)</h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 bg-[#A67C52] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[9px] font-bold">1</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-800">Kirim lokasi</span> outlet Kopi Kenangan yang mau kamu samperin
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 bg-[#A67C52] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[9px] font-bold">2</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-800">Pilih waktu:</span> bisa dijadwalkan mau ambil jam berapa, atau langsung dipesenin saat itu juga
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 bg-[#A67C52] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[9px] font-bold">3</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  <span className="font-bold text-gray-800">Ambil di outlet</span> — kopi siap dalam <span className="font-bold text-[#4A2C2A]">±3-5 menit</span> setelah dipesan
                </p>
              </div>
            </div>
          </div>

          {/* Pesan via label */}
          <p className="text-xs text-gray-400 text-center mt-5 mb-3 uppercase tracking-widest font-semibold">Pesan sekarang via</p>

          {/* Order CTA — 3 buttons */}
          <div className="flex flex-col gap-2.5">
          {/* Order CTA — WhatsApp Only */}
          <div className="flex flex-col gap-2.5">
            <a
              href={`https://wa.me/6285694352247?text=${encodeURIComponent(`Halo amp-pedia, saya ingin memesan menu ${product.name}. Mohon infonya untuk proses selanjutnya.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-2xl text-base font-extrabold transition-all active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan Sekarang via WhatsApp
            </a>
          </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductModal;
