import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "גודי א.",
      text: "מקצועיות ברמה אחרת!!!!! אושר עילאי כשנכנסים לסטודיו אווירה רגועה הנאה שחרור ...סוג הספורט היחיד שאני מוכנה לתרגל רק בגלל סטודיו קמישה והמורה המדהימה שאין כמותה ולא תהיה !!!",
      rating: 5,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "גליה ע.",
      text: "לימורי אישה מאוד מיוחדת, העברת היוגה בדרך טובה ונעימה, מקצועית, לצאת מהיוגה של לימור זה להתחדש במלוא האנרגיה הדרושה. פשוט כיף להגיע, לחוות ולהתמלא מחדש! תודה את אישה מהממת! ואין על שיעורי היוגה שלך",
      rating: 5,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "שירן א.",
      text: "וואו, סטודיו שמשלב תרגול יוגה לצד תחושת רגיעה וסיפוק אינסופי! לימור המהממת דואגת לכל פרט ופרט ולא מחסירה מהמתרגלות כלום! מחכה כל פעם מחדש לקראת התרגול. מומלץ בחום!!!!",
      rating: 5,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "מוריה פ.",
      text: "מדריכה מדהימה. אימון מקצועי לגוף ולנפש",
      rating: 5,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "מירב ח.",
      text: "לימוד מהממת, נותנת יחס אישי. החוויה בכל שיעור עוצמתית.",
      rating: 5,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "רינת ע.",
      text: "לימורי מיוחדת! הכי מקצועית בתחום! סטודיו מושלם, אווירה מדהימה! הכי מומלצת!",
      rating: 5,
      image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = 3;

  // Auto-play functionality - move 3 items at a time
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + itemsPerView;
        return nextIndex >= testimonials.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerView;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerView;
      return newIndex < 0 ? Math.max(0, testimonials.length - itemsPerView) : newIndex;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible testimonials (3 at a time)
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);
  
  // If we don't have enough testimonials to fill 3 slots, pad with testimonials from the beginning
  while (visibleTestimonials.length < itemsPerView && testimonials.length > 0) {
    const remainingSlots = itemsPerView - visibleTestimonials.length;
    const paddingTestimonials = testimonials.slice(0, remainingSlots);
    visibleTestimonials.push(...paddingTestimonials);
  }

  // Calculate number of slides (groups of 3)
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 font-hebrew">
            מתרגלים מספרים
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto font-hebrew-light">
            עדויות ממתרגלים שחוו את הכוח המרפא של היוגה במרחב שלנו
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="ביקורות קודמות"
          >
            <ChevronLeft className="w-6 h-6 text-sage-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="ביקורות הבאות"
          >
            <ChevronRight className="w-6 h-6 text-sage-600" />
          </button>

          {/* Three Testimonials Display */}
          <div className="overflow-hidden px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial, index) => (
                <div 
                  key={`${currentIndex}-${index}`}
                  className="transform transition-all duration-500"
                >
                  <div className="bg-gradient-to-br from-sage-50 to-warm-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center mb-4 justify-end">
                      <div className="text-right ml-3">
                        <h4 className="font-bold text-sage-800 font-hebrew text-base">
                          {testimonial.name}
                        </h4>
                        <div className="flex justify-end mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-warm-500 text-sm">★</span>
                          ))}
                        </div>
                      </div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    
                    <blockquote className="text-sage-700 font-hebrew-light text-right leading-relaxed italic text-sm">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - one dot per group of 3 */}
          <div className="flex justify-center mt-8 space-x-2 rtl:space-x-reverse">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === slideIndex
                    ? 'bg-sage-600 scale-125'
                    : 'bg-sage-300 hover:bg-sage-400'
                }`}
                aria-label={`עבור לקבוצת ביקורות ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;