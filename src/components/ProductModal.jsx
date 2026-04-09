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
            {/* Telegram */}
            <a
              href="https://t.me/ampnih"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#0088cc] hover:bg-[#006fa1] text-white py-3 rounded-2xl text-sm font-bold transition-colors active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/amp_pedia?igsh=NDRmMmRva291NGRr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white py-3 rounded-2xl text-sm font-bold transition-colors active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@ahmadmayiludin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-black text-white py-3 rounded-2xl text-sm font-bold transition-colors active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.63a8.23 8.23 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.06z"/></svg>
              TikTok
            </a>
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
