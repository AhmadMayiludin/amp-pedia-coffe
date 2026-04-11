"use client";

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import ProductGrid from '@/components/ProductGrid';
import ProductModal from '@/components/ProductModal';
import { menuData, categories } from '@/data/menu';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return menuData.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Header with Brand */}
      <Header />

      {/* Hero / Dashboard Section */}
      <section className="bg-gradient-to-br from-[#2C1810] via-[#3D2317] to-[#1a0e08] text-white">
        <div className="max-w-7xl mx-auto md:py-16" style={{ padding: '48px 40px' }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-[#A67C52]/20 text-[#D4A373] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#A67C52]/30">
                ☕ Promo Spesial Hari Ini
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Nikmati Kopi
                <span className="block text-[#D4A373]">Terbaik Kami</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed mx-auto md:mx-0" style={{ maxWidth: '300px' }}>
                Semua menu dari <span className="text-[#D4A373] font-bold">Kopi Kenangan</span> dengan harga promo spesial! Website ini menyediakan fitur potongan harga — pesan lewat kami, ambil langsung di outlet terdekat.
              </p>

              {/* Contact Person Section */}
              <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Pesan langsung via:</p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/6285694352247?text=Halo%20amp-pedia%2C%20saya%20ingin%20tanya-tanya%20tentang%20menu%20kopinya." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span className="text-xs font-bold">WhatsApp</span>
                  </a>

                  {/* Telegram */}
                  <a 
                    href="https://t.me/ampnih" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/30 text-[#54b4eb] px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    <span className="text-xs font-bold">Telegram</span>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/amp_pedia?igsh=NDRmMmRva291NGRr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/30 text-[#E1306C] px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    <span className="text-xs font-bold">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Decorative */}
            <div className="flex-1 hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="w-64 h-64 bg-[#A67C52]/20 rounded-full blur-3xl absolute -inset-10"></div>
                <div className="relative bg-[#A67C52]/10 rounded-3xl p-8 border border-[#A67C52]/20 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-6xl mb-4">☕</div>
                    <h3 className="text-2xl font-extrabold text-[#D4A373]">amp-pedia</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mt-1">coffee</p>
                    <div className="mt-4 w-16 h-0.5 bg-[#A67C52] mx-auto rounded-full"></div>
                    <p className="text-gray-500 text-xs mt-4 leading-relaxed">Kopi berkualitas<br/>untuk harimu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation - Sticky */}
      <CategoryTabs 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Menu Section Title */}
      <section className="px-8 pt-6 pb-2 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900">{activeCategory}</h2>
        <p className="text-gray-400 text-xs mt-0.5">Pilih menu favoritmu</p>
      </section>

      {/* Product List */}
      <section className="pb-12">
        <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Footer / Contact Person Section */}
      <footer className="bg-[#2C1810] text-white">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="text-center mb-8">
            <h3 className="text-lg font-extrabold mb-1">Mau Pesan?</h3>
            <p className="text-gray-400 text-sm">Hubungi kami langsung melalui platform berikut</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/6285694352247?text=Halo%20amp-pedia%2C%20saya%20ingin%20memesan%20kopi." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.63 1.433h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <div>
                <span className="text-sm font-bold text-[#25D366]">WhatsApp</span>
                <p className="text-[10px] text-gray-500">085694352247</p>
              </div>
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/ampnih" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0088cc]/15 hover:bg-[#0088cc]/25 border border-[#0088cc]/30 px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 text-[#54b4eb]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0 12 12 0 0011.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              <div>
                <span className="text-sm font-bold text-[#54b4eb]">Telegram</span>
                <p className="text-[10px] text-gray-500">@ampnih</p>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/amp_pedia?igsh=NDRmMmRva291NGRr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#E1306C]/15 hover:bg-[#E1306C]/25 border border-[#E1306C]/30 px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <div>
                <span className="text-sm font-bold text-[#E1306C]">Instagram</span>
                <p className="text-[10px] text-gray-500">@amp_pedia</p>
              </div>
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com/@ahmadmayiludin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.63a8.23 8.23 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.06z"/></svg>
              <div>
                <span className="text-sm font-bold text-white">TikTok</span>
                <p className="text-[10px] text-gray-500">@ahmadmayiludin</p>
              </div>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#A67C52] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-[8px]">AP</span>
              </div>
              <span className="text-sm font-bold">amp-pedia <span className="text-[#D4A373]">coffee</span></span>
            </div>
            <p className="text-gray-600 text-[10px]">&copy; 2026 amp-pedia coffee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
