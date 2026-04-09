import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "amp-pedia coffee | Menu & Promo",
  description: "Daftar menu dan promo terbaru amp-pedia coffee. Coffee, Non-Coffee, Oatside Series, dan Kenangan Frappe dengan harga spesial.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
