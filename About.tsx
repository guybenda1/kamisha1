import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/489024030_10232247937053905_1312261856690318347_n.jpg"
                alt="לימור - מורה יוגה אשטנגה-ויניאסה בתרגול על החוף"
                className="rounded-2xl shadow-2xl w-full h-96 lg:h-128 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-warm-100 p-6 rounded-2xl shadow-lg">
                <p className="text-warm-800 font-hebrew font-bold text-lg">
                  20 שנות ניסיון
                </p>
                <p className="text-warm-600 font-hebrew-light">
                  של תרגול יוגה
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6 font-hebrew">
              נעים להכיר, אני לימור
            </h2>
            
            <div className="space-y-6 text-sage-600 font-hebrew-light text-lg leading-relaxed">
              <p>
                מורה ליוגה אשטנגה-ויניאסא, מתרגלת כבר כמעט שני עשורים.
              </p>
              
              <p>
                הסטודיו שלי נולד מתוך רצון ליצור מרחב אינטימי ומעורר השראה,
                שבו כל מתרגל.ת מוזמנ.ת לפגוש את עצמו.ה בדיוק כפי שהוא.
              </p>
              
              <p>
                מעבר לשיעורים, אני מפתחת סדנאות, ריטריטים ותוכנית ליווי גוף-נפש, 
                לצד קולקציית תכשיטים בהשראת עולם היוגה והחיים עצמם.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-sage-50 p-4 rounded-lg text-center">
                <h4 className="font-hebrew font-bold text-sage-800">התמחות</h4>
                <p className="font-hebrew-light text-sage-600 text-sm mt-1">אשטנגה-ויניאסא</p>
              </div>
              <div className="bg-warm-50 p-4 rounded-lg text-center">
                <h4 className="font-hebrew font-bold text-warm-800">ניסיון</h4>
                <p className="font-hebrew-light text-warm-600 text-sm mt-1">20 שנות ניסיון</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;