"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { menuData } from '@/data/menu';
import BundlingProductCard from '@/components/BundlingProductCard';
import BundlingSummary from '@/components/BundlingSummary';

export default function BundlingPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [lastAdded, setLastAdded] = useState('');

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleAddItem = (product, size) => {
    const originalPrice = size === 'regular' ? product.regular.original : product.large.original;
    const newItem = {
      id: product.id,
      name: product.name,
      size: size,
      originalPrice: originalPrice,
      timestamp: Date.now() // Unique key for deletion
    };
    setSelectedItems(prev => [...prev, newItem]);
    setLastAdded(`${product.name} (${size})`);
    setShowToast(true);
  };

  const handleRemoveItem = (index) => {
    setSelectedItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setSelectedItems([]);
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#2C1810] text-white py-12 md:py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#A67C52]/20 text-[#D4A373] text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 border border-[#A67C52]/30">
            Special Promo
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Paket <span className="text-[#D4A373]">Bundling</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Pilih menu favoritmu sesuka hati! Dapatkan potongan langsung <span className="text-white font-bold">28%</span> dari harga asli untuk setiap pembelian minimal <span className="text-[#D4A373] font-bold">Rp50.000</span>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Product Selection List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 border-l-4 border-[#A67C52] pl-4">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-none">Daftar Menu</h2>
                <p className="text-gray-400 text-xs mt-2">Klik Reguler atau Large untuk menambah ke paket</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {menuData.map(product => (
                <BundlingProductCard 
                  key={product.id} 
                  product={product} 
                  onAdd={handleAddItem} 
                />
              ))}
            </div>
          </div>

          {/* Sidebar Summary (Desktop) */}
          <div className="hidden lg:block w-96">
            <BundlingSummary 
              selectedItems={selectedItems} 
              onRemove={handleRemoveItem}
              onClear={handleClearAll}
            />
          </div>
        </div>
      </div>

      {/* Floating Summary Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 pt-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <BundlingSummary 
            selectedItems={selectedItems} 
            onRemove={handleRemoveItem}
            onClear={handleClearAll}
            isMobile
          />
        </div>
      </div>

      <footer className="bg-white border-t border-gray-100 py-8 text-center text-gray-400 text-[10px] uppercase tracking-widest mt-12">
        &copy; 2026 amp-pedia coffee &bull; crafted for coffee lovers
      </footer>

      {/* Toast Notification */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="bg-[#2C1810] text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#A67C52]/30">
          <div className="w-6 h-6 bg-[#A67C52] rounded-full flex items-center justify-center text-[10px]">✓</div>
          <span className="text-sm font-bold">Added: {lastAdded}</span>
        </div>
      </div>
    </main>
  );
}
