import React, { useEffect } from "react";
import axios from "axios";

export default function Doctors({ doctors, setDoctors, getDoctors }) {
  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            الفريق الطبي المختص
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            ابحث عن دكتور أو تخصص، واضغط على الكارد لحجز موعدك فوراً.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Sidebar Filter */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 sticky top-24 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4 pb-2 border-b border-slate-50 text-sm">
              تصفية البحث
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">
                  التخصص
                </label>
                <select className="w-full bg-slate-50 border-0 rounded-xl px-3 py-2.5 text-xs text-slate-600 focus:ring-2 focus:ring-blue-500/20">
                  <option>كل التخصصات</option>
                  <option>طب القلب</option>
                  <option>طب الأطفال</option>
                  <option>الأسنان</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">
                  الترتيب حسب
                </label>
                <select className="w-full bg-slate-50 border-0 rounded-xl px-3 py-2.5 text-xs text-slate-600 focus:ring-2 focus:ring-blue-500/20">
                  <option>الأعلى تقييماً</option>
                  <option>الأقل سعراً</option>
                  <option>الأعلى سعراً</option>
                </select>
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {doctors?.map((doc) => (
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
      </div>
    </div>
  );
}
