import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-right">
            <div className="mb-4">
              <img 
                src="/logokamisha copy.png" 
                alt="Kamisha Boutique Yoga Studio" 
                className="h-16 w-auto ml-auto"
              />
            </div>
            <p className="text-sage-300 font-hebrew-light leading-relaxed">
              Kamisha<br />
              Boutique Yoga Studio
            </p>
            
            {/* Social Media Links in Footer */}
            <div className="mt-6">
              <div className="flex justify-end space-x-4 rtl:space-x-reverse">
                <a
                  href="https://www.facebook.com/limor.ben.david.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/limorbendavid_yoga/?igsh=c2drYmptcjJpdGht&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=1617226794&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/972505172253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 font-hebrew">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sage-300 hover:text-white transition-colors font-hebrew-light">
                  בית
                </a>
              </li>
              <li>
                <a href="#about" className="text-sage-300 hover:text-white transition-colors font-hebrew-light">
                  אודותיי
                </a>
              </li>
              <li>
                <a href="#classes" className="text-sage-300 hover:text-white transition-colors font-hebrew-light">
                  רישום לתרגולים
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sage-300 hover:text-white transition-colors font-hebrew-light">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-lg font-bold mb-4 font-hebrew">פרטי התקשרות</h4>
            <div className="space-y-2 text-sage-300 font-hebrew-light">
              <p>טלפון: 050-5172253</p>
              <p>אימייל: limorbendavid29@gmail.com</p>
              <p>הסטודיו: הרותם 20, מעלה אדומים</p>
              <a 
                href="https://ul.waze.com/ul?place=EhlIYXJvdGVtIDIwLCBNYSdhbGUgQWR1bWltIjASLgoUChIJFQCHSjUpAxURXpg_qcKtlaoQFCoUChIJ2xCvRzUpAxURjnsD0fbre0Y&ll=31.76580320%2C35.30286170&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-300 hover:text-warm-200 transition-colors underline block mt-2"
              >
                הוראות הגעה ב-Waze
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-800 mt-8 pt-8 text-center">
          <p className="text-sage-400 font-hebrew-light">
            © 2024 Kamisha Boutique Yoga Studio. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;