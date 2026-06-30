import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-b from-blue-50/50 via-white to-white py-12 md:py-20 lg:py-24"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
          احجز موعدك الآن بكل سهولة وأمان
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight max-w-4xl mx-auto mb-6">
          رعايتكم الصحية هي{" "}
          <span className="text-blue-600 relative">
            أولويتنا القصوى
            <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 -z-10 rounded"></span>
          </span>{" "}
          دائماً
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          ابحث عن طبيبك المفضل ووفر وقتك بجدولة حجزك أونلاين في دقيقة واحدة.
          نجمع لك أفضل الكوادر الطبية بتخصصات مختلفة.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-16 pt-8 border-t border-slate-100">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-800">25+</p>
            <p className="text-xs text-slate-400 mt-1">طبيب متخصص</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-800">
              10k+
            </p>
            <p className="text-xs text-slate-400 mt-1">حجز ناجح</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-800">99%</p>
            <p className="text-xs text-slate-400 mt-1">تقييم رضا المرضى</p>
          </div>
        </div>
      </div>
    </section>
  );
}
