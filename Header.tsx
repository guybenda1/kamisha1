import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logokamisha copy.png" 
              alt="Kamisha Boutique Yoga Studio" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <a href="#home" className="text-sage-600 hover:text-sage-800 font-hebrew font-medium transition-colors">
              בית
            </a>
            <a href="#about" className="text-sage-600 hover:text-sage-800 font-hebrew font-medium transition-colors">
              אודותיי
            </a>
            <a href="#classes" className="text-sage-600 hover:text-sage-800 font-hebrew font-medium transition-colors">
              רישום לתרגולים
            </a>
            <a href="#contact" className="text-sage-600 hover:text-sage-800 font-hebrew font-medium transition-colors">
              צור קשר
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sage-600 hover:text-sage-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-sage-600 hover:text-sage-800 font-hebrew">
                בית
              </a>
              <a href="#about" className="block px-3 py-2 text-sage-600 hover:text-sage-800 font-hebrew">
                אודותיי
              </a>
              <a href="#classes" className="block px-3 py-2 text-sage-600 hover:text-sage-800 font-hebrew">
                רישום לתרגולים
              </a>
              <a href="#contact" className="block px-3 py-2 text-sage-600 hover:text-sage-800 font-hebrew">
                צור קשר
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;