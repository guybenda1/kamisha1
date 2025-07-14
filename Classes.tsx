import React from 'react';

const Classes = () => {
  const classes = [
    {
      title: "תרגולים קבוצתיים",
      description: "שיעורי אשטנגה וויניאסא יוגה במרחב הסטודיו האינטימי",
      duration: "75 דקות",
      level: "כל הרמות",
      image: "/IMG_7890.jpg",
      details: "שיעורי יוגה קבועים בסטודיו עם אווירה אינטימית ומעוררת השראה",
      link: "https://www.lee.co.il/b/ec7e2dfc8f494?tab=general",
      buttonText: "רישום"
    },
    {
      title: "תרגולים אישיים",
      description: "תרגול אישי 1:1 מותאם למידותייך עם התאמות אישיות",
      duration: "90 דקות",
      level: "מותאם אישית",
      image: "/IMG_6395.jpg",
      details: "מציעה בנוסף לתרגולי הסטודיו שבשגרה, תרגול אישי 1:1, מותאם למידותייך, עם מתן דגשים והתאמות.",
      link: "https://www.lee.co.il/b/ec7e2dfc8f494?tab=general",
      buttonText: "רישום"
    },
    {
      title: "ליווי גוף נפש",
      description: "תהליך ליווי התפתחות ושינוי ייחודי של חמישה מפגשים",
      duration: "5 מפגשים",
      level: "אישי",
      image: "/IMG_0996.jpg",
      details: "הגוף הוא מראה לנפש גופנפש אחד הם. יוגה=איחוד בין נפש תודעה וגוף. ומכאן שיצרתי תהליך ליווי התפתחות ושינוי ייחודי של חמישה מפגשים הבנויים משילוב בין שיח אמפתי מתקלף ותרגול יוגה תומך כהמשך ישיר והרמוני להטמעה מקסימלית ועוצמתית. כל התשובות נמצאות בך אני מושיטה יד מכוונת. כשהגוף והמיינד פתוחים ומשוחררים כל תהליך מוצא את דרכו פנימה נינוח וחסר מאמץ ובעיקר אפשרי.",
      link: "https://wa.me/972505172253?text=%D7%94%D7%99%D7%99%21%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%2F%D7%AA%20%D7%91%D7%AA%D7%9B%D7%A0%D7%99%D7%AA%20%D7%9C%D7%99%D7%95%D7%95%D7%99%20%D7%92%D7%95%D7%A3-%D7%A0%D7%A4%D7%A9%20%D7%A9%D7%90%D7%AA%20%D7%9E%D7%A6%D7%99%D7%A2%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%21",
      buttonText: "צור קשר"
    },
    {
      title: "מפגשי העמקה בדרך היוגה",
      description: "למי שכבר הבין שיש הרבה מעבר לאסאנות - אסופה מרתקת של ידע ותרגול",
      duration: "4 מפגשים",
      level: "כל הרמות",
      image: "/FullSizeRender.jpg",
      details: "למי שכבר הבין שיש הרבה מעבר לאסאנות, למי שעולם היוגה מעורר בו סקרנות, למי שמבקש לגלות, להעמיק ולהרחיב עוד רובד, אני מציעה ומנגישה את הידע ברוח היוגה מנקודת המבט שלי. באסופה מרתקת בת ארבעה מפגשים המורכבים מהפילוסופיה והחיבור אל היום-יום ותרגול יוגה תומך. סאנגה במיטבה! אני לא משתמשת בגוף כדי להגיע לאסאנה, אני משתמשת באסאנה כדי להגיע לתוך הגוף.",
      link: "https://wa.me/972505172253?text=%D7%94%D7%99%D7%99%21%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%2F%D7%AA%20%D7%91%D7%A9%D7%99%D7%A2%D7%95%D7%A8%D7%99%20%D7%94%D7%A2%D7%9E%D7%A7%D7%94%20%D7%91%D7%93%D7%A8%D7%9A%20%D7%94%D7%99%D7%95%D7%92%D7%94%20%D7%A9%D7%90%D7%AA%20%D7%9E%D7%A6%D7%99%D7%A2%D7%94%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%21",
      buttonText: "צור קשר"
    },
    {
      title: "סדנאות קונספט וריטריטים",
      description: "סדנאות העמקה בנושאים ספציפיים ומסעות העמקה בטבע",
      duration: "משתנה",
      level: "כל הרמות",
      image: "/653641_6644a94e4169a.jpg",
      details: "סדנאות מיוחדות להעמקת הידע והתרגול בתחומים שונים של היוגה, וחוויות מעמיקות בטבע המשלבות תרגול יוגה עם חיבור לסביבה הטבעית",
      link: "https://www.lee.co.il/b/ec7e2dfc8f494?tab=general",
      buttonText: "רישום"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 font-hebrew">
            השיעורים והפעילויות שלי
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto font-hebrew-light">
            מגוון רחב של פעילויות - משיעורי יוגה קבועים ועד ריטריטים וליווי אישי
          </p>
        </div>

        {/* First Row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {classes.slice(0, 3).map((classItem, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-48">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 text-right flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-sage-800 mb-2 font-hebrew">
                  {classItem.title}
                </h3>
                
                <p className="text-sage-600 mb-4 font-hebrew-light leading-relaxed flex-1">
                  {classItem.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="bg-warm-100 text-warm-800 px-3 py-1 rounded-full font-hebrew-light">
                    {classItem.level}
                  </span>
                  <span className="text-sage-600 font-hebrew-light">
                    {classItem.duration}
                  </span>
                </div>
                
                {/* Details section - hidden by default, can be expanded */}
                <div className="mb-4">
                  <details className="group">
                    <summary className="cursor-pointer text-sage-700 font-hebrew font-medium hover:text-sage-800 transition-colors">
                      פרטים נוספים
                    </summary>
                    <div className="mt-3 p-4 bg-sage-50 rounded-lg">
                      <p className="text-sage-600 font-hebrew-light text-sm leading-relaxed">
                        {classItem.details}
                      </p>
                    </div>
                  </details>
                </div>
                
                <a
                  href={classItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-lg font-hebrew font-medium transition-colors duration-300 mt-auto text-center block"
                >
                  {classItem.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 items centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {classes.slice(3, 5).map((classItem, index) => (
              <div key={index + 3} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 text-right flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-sage-800 mb-2 font-hebrew">
                    {classItem.title}
                  </h3>
                  
                  <p className="text-sage-600 mb-4 font-hebrew-light leading-relaxed flex-1">
                    {classItem.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="bg-warm-100 text-warm-800 px-3 py-1 rounded-full font-hebrew-light">
                      {classItem.level}
                    </span>
                    <span className="text-sage-600 font-hebrew-light">
                      {classItem.duration}
                    </span>
                  </div>
                  
                  {/* Details section - hidden by default, can be expanded */}
                  <div className="mb-4">
                    <details className="group">
                      <summary className="cursor-pointer text-sage-700 font-hebrew font-medium hover:text-sage-800 transition-colors">
                        פרטים נוספים
                      </summary>
                      <div className="mt-3 p-4 bg-sage-50 rounded-lg">
                        <p className="text-sage-600 font-hebrew-light text-sm leading-relaxed">
                          {classItem.details}
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <a
                    href={classItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-lg font-hebrew font-medium transition-colors duration-300 mt-auto text-center block"
                  >
                    {classItem.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;