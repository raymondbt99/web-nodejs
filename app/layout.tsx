import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Simple Website",
  description: "Website sederhana dengan Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full">
      <body className={`${inter.className} bg-gray-50 min-h-full flex flex-col`}>
        {/* Global Header */}
        <header className="bg-blue-600 text-white shadow-lg flex-shrink-0">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">MyWebsite</h1>
              <div className="space-x-6">
                <a href="/" className="hover:text-blue-200 transition">Home</a>
                <a href="/about" className="hover:text-blue-200 transition">About</a>
                <a href="/contact" className="hover:text-blue-200 transition">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Page Content - Area yang bisa scroll */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-gray-800 text-white py-6 flex-shrink-0">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}