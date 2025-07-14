import React from 'react';

const Studio = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-8 font-hebrew">
            הסטודיו
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1 text-right">
            <div className="space-y-6 text-sage-600 font-hebrew-light text-lg leading-relaxed">
              <p>
                הסטודיו שלי נולד מתוך רצון ליצור קהילה במרחב שהוא גם אינטימי וגם מעורר השראה — 
                כזה שמזהה את מי שנכנס אליו, ויודע לראות מעבר.
              </p>
              
              <p>
                אני מאמינה בהנחיה שמחוברת ללב, באווירה שמעודדת ביטוי וסקרנות ובמפגש שבו כל מתרגל 
                מקבל הזדמנות לפגוש את עצמו ובדיוק את מה שנכון עבורו.
              </p>
              
              <p>
                מעבר לשיעורים האישיים והקבוצתיים, אני מפתחת סדנאות קונספט, וריטריטים שמעמיקים את התרגול 
                הפילוסופי הפיזי והמנטלי, לצד תוכנית ליווי תהליכית שאני גאה בה במיוחד — ליווי גופנפש הוליסטי 
                שמבוסס על הקשבה, הבנה עמוקה של האדם שמולי, מתן כלים ושאלת שאלות מדייקות שמובילות אותו למצוא את התשובות.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              <img
                src="/IMG_4651.jpg"
                alt="הסטודיו של לימור - מרחב אינטימי ומעורר השראה עם חלונות גדולים, תאורה רכה ומחצלות יוגה"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-sage-100 p-6 rounded-2xl shadow-lg">
                <p className="text-sage-800 font-hebrew font-bold text-lg">
                  מרחב אינטימי
                </p>
                <p className="text-sage-600 font-hebrew-light">
                  ומעורר השראה
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;