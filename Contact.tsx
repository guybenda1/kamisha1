import React from 'react';
import { Phone, Mail, MapPin, Clock, Navigation, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-hebrew">
            בוא/י נתחיל את המסע יחד
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-sage-700 p-3 rounded-full">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-right">
                <h4 className="font-bold font-hebrew text-lg">טלפון</h4>
                <p className="text-sage-200 font-hebrew-light">050-5172253</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-sage-700 p-3 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-right">
                <h4 className="font-bold font-hebrew text-lg">אימייל</h4>
                <p className="text-sage-200 font-hebrew-light">limorbendavid29@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-sage-700 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-right">
                <h4 className="font-bold font-hebrew text-lg">הסטודיו</h4>
                <p className="text-sage-200 font-hebrew-light">הרותם 20, מעלה אדומים</p>
              </div>
            </div>

            {/* Navigation Link */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-sage-700 p-3 rounded-full">
                <Navigation className="w-6 h-6" />
              </div>
              <div className="text-right">
                <h4 className="font-bold font-hebrew text-lg">הוראות הגעה</h4>
                <a 
                  href="https://ul.waze.com/ul?place=EhlIYXJvdGVtIDIwLCBNYSdhbGUgQWR1bWltIjASLgoUChIJFQCHSjUpAxURXpg_qcKtlaoQFCoUChIJ2xCvRzUpAxURjnsD0fbre0Y&ll=31.76580320%2C35.30286170&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-300 hover:text-warm-200 font-hebrew-light transition-colors underline"
                >
                  פתח ב-Waze לניווט
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="bg-sage-700 p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-right">
                <h4 className="font-bold font-hebrew text-lg">שעות פעילות</h4>
                <p className="text-sage-200 font-hebrew-light">
                  ראשון-חמישי: 7:00-21:00<br />
                  שישי: 7:00-11:00
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-sage-700">
              <h4 className="font-bold font-hebrew text-lg mb-4 text-right">עקבו אחרי</h4>
              <div className="flex justify-end space-x-4 rtl:space-x-reverse">
                <a
                  href="https://www.facebook.com/limor.ben.david.2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-700 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/limorbendavid_yoga/?igsh=c2drYmptcjJpdGht&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-700 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=1617226794&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-700 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/972505172253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-700 hover:bg-green-600 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 font-hebrew text-right">
                  שם מלא
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-400 text-white placeholder-white/70 text-right"
                  placeholder="הכנסי את שמך המלא"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 font-hebrew text-right">
                  אימייל
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-400 text-white placeholder-white/70 text-right"
                  placeholder="הכנסי את כתובת האימייל שלך"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 font-hebrew text-right">
                  טלפון
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-400 text-white placeholder-white/70 text-right"
                  placeholder="הכנסי את מספר הטלפון שלך"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 font-hebrew text-right">
                  הודעה
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-400 text-white placeholder-white/70 text-right resize-none"
                  placeholder="ספרי לי על עצמך ועל המטרות שלך..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-warm-600 hover:bg-warm-700 text-white py-4 rounded-lg font-hebrew font-medium transition-colors duration-300 transform hover:scale-105"
              >
                שלחי הודעה
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;