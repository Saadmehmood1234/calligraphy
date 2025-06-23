import Link from 'next/link';
import { Instagram, Twitter, Youtube, Home, UserRound, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950/95 py-16 border-t border-emerald-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Arabic Calligraphy</h3>
            <p className="mb-6 text-emerald-200/80">
              Authentic Arabic calligraphy art since 1985. Handcrafted pieces with precision and unique beauty.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-emerald-200/80 hover:text-emerald-400 transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-200/80 hover:text-emerald-400 transition-colors flex items-center">
                  <UserRound className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-200/80 hover:text-emerald-400 transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-emerald-200/80 hover:text-emerald-400 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Art Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Contact Info</h3>
            <address className="not-italic text-emerald-200/80 space-y-3">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-emerald-400" />
                D-27 Shaheen Bagh, Okhla New Delhi, India
              </p>
              <p className="flex items-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-emerald-400" />
                mehmoodsaad347@gmail.com
              </p>
              <p className="flex items-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5 text-emerald-400" />
                9773834796
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-emerald-900/50 mt-16 pt-8 text-center text-emerald-300/70">
          <p>© {new Date().getFullYear()} Arabic Calligraphy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}