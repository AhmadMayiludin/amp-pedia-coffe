// ============================================================
// DATA MENU amp-pedia coffee
// ============================================================
// Cara menambah menu baru:
// 1. Taruh gambar di folder: public/images/<nama-kategori>/
//    Contoh: public/images/coffee/americano.jpg
// 2. Tambahkan object baru di bawah kategori yang sesuai
// 3. Pastikan "id" tidak ada yang sama
// 4. Pastikan "category" sesuai dengan salah satu di array "categories" di bawah
//
// FORMAT HARGA:
//   regular: { original: harga asli, promo: harga promo }  ← Ukuran Reguler
//   large:   { original: harga asli, promo: harga promo }  ← Ukuran Large
// ============================================================

export const menuData = [

  // ===================== COFFEE =====================
  // Taruh gambar di: public/images/coffee/
  {
    id: 1,
    name: "Tiramisu Latte",
    category: "Coffee",
    regular: { original: 23000, promo: 16500 },
    large: { original: 30000, promo: 21500 },
    image: "/images/coffee/trl.jpeg"
  },
  {
    id: 2,
    name: "Dua Shot OG Aren",
    category: "Coffee",
    regular: { original: 35000, promo: 28000 },
    large: { original: 40000, promo: 33000 },
    image: "/images/coffee/dua-shot-og-aren.jpg"
  },
  {
    id: 3,
    name: "Tiramisu Mocha Latte",
    category: "Coffee",
    regular: { original: 28000, promo: 23000 },
    large: { original: 33000, promo: 28000 },
    image: "/images/coffee/tiramisu-mocha-latte.jpg"
  },
  {
    id: 4,
    name: "Toffee Nut Latte",
    category: "Coffee",
    regular: { original: 28000, promo: 22000 },
    large: { original: 33000, promo: 27000 },
    image: "/images/coffee/toffee-nut-latte.jpg"
  },
  {
    id: 5,
    name: "Toffee Nut Aren Latte",
    category: "Coffee",
    regular: { original: 30000, promo: 24000 },
    large: { original: 35000, promo: 29000 },
    image: "/images/coffee/toffee-nut-aren-latte.jpg"
  },
  {
    id: 6,
    name: "Toffee Nut Oat Latte",
    category: "Coffee",
    regular: { original: 32000, promo: 25000 },
    large: { original: 37000, promo: 30000 },
    image: "/images/coffee/toffee-nut-oat-latte.jpg"
  },
  {
    id: 7,
    name: "Pistachio Aren Latte",
    category: "Coffee",
    regular: { original: 28000, promo: 22000 },
    large: { original: 33000, promo: 27000 },
    image: "/images/coffee/pistachio-aren-latte.jpg"
  },

  // ===================== NON COFFEE =====================
  // Taruh gambar di: public/images/non-coffee/
  {
    id: 8,
    name: "Thai Tea",
    category: "Non Coffee",
    regular: { original: 22000, promo: 15000 },
    large: { original: 27000, promo: 20000 },
    image: "/images/non-coffee/thai-tea.jpg"
  },
  {
    id: 9,
    name: "Matcha Latte",
    category: "Non Coffee",
    regular: { original: 32000, promo: 22000 },
    large: { original: 37000, promo: 27000 },
    image: "/images/non-coffee/matcha-latte.jpg"
  },
  {
    id: 10,
    name: "Cokelat Klasik",
    category: "Non Coffee",
    regular: { original: 28000, promo: 19000 },
    large: { original: 33000, promo: 24000 },
    image: "/images/non-coffee/cokelat-klasik.jpg"
  },
  {
    id: 11,
    name: "Taro Latte",
    category: "Non Coffee",
    regular: { original: 26000, promo: 18000 },
    large: { original: 31000, promo: 23000 },
    image: "/images/non-coffee/taro-latte.jpg"
  },

  // ===================== OATSIDE SERIES =====================
  // Taruh gambar di: public/images/oatside-series/
  {
    id: 12,
    name: "Oatside Aren Latte",
    category: "Oatside Series",
    regular: { original: 35000, promo: 26000 },
    large: { original: 40000, promo: 31000 },
    image: "/images/oatside-series/oatside-aren-latte.jpg"
  },
  {
    id: 13,
    name: "Oatside Caramel Latte",
    category: "Oatside Series",
    regular: { original: 38000, promo: 29000 },
    large: { original: 43000, promo: 34000 },
    image: "/images/oatside-series/oatside-caramel-latte.jpg"
  },
  {
    id: 14,
    name: "Oatside Matcha Latte",
    category: "Oatside Series",
    regular: { original: 40000, promo: 30000 },
    large: { original: 45000, promo: 35000 },
    image: "/images/oatside-series/oatside-matcha-latte.jpg"
  },
  {
    id: 15,
    name: "Oatside Mocha Latte",
    category: "Oatside Series",
    regular: { original: 38000, promo: 28000 },
    large: { original: 43000, promo: 33000 },
    image: "/images/oatside-series/oatside-mocha-latte.jpg"
  },

  // ===================== KENANGAN FRAPPE =====================
  // Taruh gambar di: public/images/kenangan-frappe/
  {
    id: 16,
    name: "Original Kenangan Frappe",
    category: "Kenangan Frappe",
    regular: { original: 32000, promo: 24000 },
    large: { original: 37000, promo: 29000 },
    image: "/images/kenangan-frappe/original-kenangan-frappe.jpg"
  },
  {
    id: 17,
    name: "Mocha Kenangan Frappe",
    category: "Kenangan Frappe",
    regular: { original: 35000, promo: 27000 },
    large: { original: 40000, promo: 32000 },
    image: "/images/kenangan-frappe/mocha-kenangan-frappe.jpg"
  },
  {
    id: 18,
    name: "Hazelnut Kenangan Frappe",
    category: "Kenangan Frappe",
    regular: { original: 35000, promo: 27000 },
    large: { original: 40000, promo: 32000 },
    image: "/images/kenangan-frappe/hazelnut-kenangan-frappe.jpg"
  },
  {
    id: 19,
    name: "Caramel Kenangan Frappe",
    category: "Kenangan Frappe",
    regular: { original: 35000, promo: 26000 },
    large: { original: 40000, promo: 31000 },
    image: "/images/kenangan-frappe/caramel-kenangan-frappe.jpg"
  },
];

// ============================================================
// DAFTAR KATEGORI (Tabs yang tampil di atas)
// ============================================================
export const categories = ["Coffee", "Non Coffee", "Oatside Series", "Kenangan Frappe"];
