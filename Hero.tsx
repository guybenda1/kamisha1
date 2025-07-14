import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background - Fixed for Shorts */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/ZI99aSUIt7M?autoplay=1&mute=1&loop=1&playlist=ZI99aSUIt7M&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0&cc_load_policy=0&start=0"
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100vw',
            height: '100vh',
            transform: 'scale(1.5)', // Scale up to hide YouTube UI
            transformOrigin: 'center center',
            filter: 'brightness(0.6)', // Darken for better text readability
            pointerEvents: 'none'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="Kamisha Yoga Background Video"
        ></iframe>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-sage-900/40 to-warm-900/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 font-script leading-tight tracking-wide drop-shadow-2xl">
          Kamisha
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-warm-200 mb-12 font-script italic drop-shadow-lg">
          Boutique Yoga Studio
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#classes"
            className="bg-sage-600/90 hover:bg-sage-700 backdrop-blur-sm text-white px-8 py-4 rounded-full font-hebrew font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
          >
            רישום לתרגולים
          </a>
          <a 
            href="#contact"
            className="border-2 border-white/80 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-hebrew font-medium transition-all duration-300 shadow-xl"
          >
            צור קשר
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;