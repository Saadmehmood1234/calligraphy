// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-primary/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-script text-light hover:text-accent transition-colors">
            Elegant Script
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-light transition-colors">Home</Link>
            <Link href="/about" className="hover:text-light transition-colors">About</Link>
            <Link href="/contact" className="hover:text-light transition-colors">Contact</Link>
          </nav>
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}