import React from "react";

const DUMMY_DOCTORS = [
  {
    id: 1,
    name: "د. أحمد رأفت",
    specialty: "طب وجراحة القلب",
    rate: "4.9",
    price: "300 ج.م",
    branch: "القاهرة الجديدة",
  },
  {
    id: 2,
    name: "د. سارة المنصوري",
    specialty: "طب الأطفال وحديثي الولادة",
    rate: "4.8",
    price: "250 ج.م",
    branch: "مدينة نصر",
  },
  {
    id: 3,
    name: "د. محمود عبد العزيز",
    specialty: "طب وجراحة الأسنان",
    rate: "5.0",
    price: "400 ج.م",
    branch: "الشيخ زايد",
  },
];

export default function SomeDoctors({ doctors }) {
  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
              نخبة من أطبائنا
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              اضغط على الطبيب للانتقال إلى صفحة حجز الموعد مباشرة
            </p>
          </div>
          <a
            href="/doctors"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            عرض الكل ←
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.slice(0, 3).map((doc) => (
            <div
              key={doc.id}
              className="group bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-between min-h-[180px] hover:border-blue-300 hover:shadow-xl hover:shadow-slate-100/70 transition-all duration-300"
            >
              <div>
                {/* Top Row: Specialty & Rate */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {doc.specialization}
                  </span>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                    ⭐ 4.6
                  </span>
                </div>

                {/* Doctor Name */}
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mt-2">
                  {doc.name}
                </h2>

                {/* Subtitle / Availability info */}
                <p className="text-xs text-slate-400 mt-1">
                  45 تقييم مريض حقيقي في المنظومة
                </p>
              </div>

              {/* Bottom Row: Price Only (بدون أزرار) */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-4">
                <span className="text-xs text-slate-400">سعر الكشف</span>
                <span className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                  {doc.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
