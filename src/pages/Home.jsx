import React, { useEffect } from "react";
import Hero from "../components/Hero";
import SomeDoctors from "../components/SomeDoctors";

export default function Home({ doctors, getDoctors }) {
  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />

        {/* Features Minimal Grid */}
        <section
          className="py-12 bg-slate-50/50 border-y border-slate-100"
          dir="rtl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 text-xl font-bold">
                ١
              </div>
              <div>
                <h4 className="font-bold text-slate-800">اختر طبيبك</h4>
                <p className="text-xs text-slate-400 mt-1">
                  تصفح السير الذاتية والتقييمات الحقيقية للمرضى بكل شفافية.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 text-xl font-bold">
                ٢
              </div>
              <div>
                <h4 className="font-bold text-slate-800">حدد الموعد والأيام</h4>
                <p className="text-xs text-slate-400 mt-1">
                  اختر اليوم والساعة المناسبة لجدولك اليومي بضغطة زر.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 text-xl font-bold">
                ٣
              </div>
              <div>
                <h4 className="font-bold text-slate-800">
                  تأكيد فوري عبر الـ SMS
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  تصلك تفاصيل الموعد ورقم الحجز مباشرة بدون أي انتظار.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SomeDoctors doctors={doctors} getDoctors={getDoctors} />
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-slate-100 py-6 text-center text-xs text-slate-400 bg-white">
        © 2026 عيادة الأمل الطبية. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
