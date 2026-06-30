import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function SetAppointment({ doctors, getDoctors }) {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { user } = useUser();

  const DOCTORS_DATA = doctors;

  useEffect(() => {
    getDoctors();
  }, []);

  const currentDoctor = DOCTORS_DATA.find((doc) => doc.id === selectedDoctorId);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/set-appointement", {
        ...data,
        doctor_id: selectedDoctorId,
        user_id: user.id,
      });
      reset();
      toast.success("تم حجز الموعد بنجاح");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Card Container */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 mb-6">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              منظومة الحجز الفوري
            </span>
            <h1 className="text-2xl font-black text-slate-800 mt-3">
              احجز موعد كشف طبي
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              يرجى إدخال بيانات المريض واختيار الطبيب المناسب لجدولة الموعد.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* 1. Patient Info Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  اسم المريض ثنائي أو ثلاثي
                </label>
                <input
                  type="text"
                  required
                  {...register("patient_name", { required: true })}
                  placeholder="مثال: محمد أحمد علي"
                  className="w-full bg-slate-50 border-0 rounded-xl p-3.5 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  رقم الموبايل للتأكيد
                </label>
                <input
                  type="tel"
                  required
                  {...register("patient_phone", { required: true })}
                  placeholder="01XXXXXXXXX"
                  dir="ltr"
                  className="w-full bg-slate-50 border-0 rounded-xl p-3.5 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-right"
                />
              </div>
            </div>

            {/* 2. Choose Doctor & Specialty */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                اختر الطبيب والتخصص
              </label>
              <select
                required
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(Number(e.target.value))}
                className="w-full bg-slate-50 border-0 rounded-xl p-3.5 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
              >
                <option value="">-- اضغط لاختيار الطبيب من القائمة --</option>
                {DOCTORS_DATA.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} ({doc.specialization})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Choose Date */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                اختر تاريخ الكشف
              </label>
              <input
                type="datetime-local"
                required
                {...register("appointment_date", { required: true })}
                className="w-full bg-slate-50 border-0 rounded-xl p-3.5 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
              />
            </div>

            {/* 5. Live Summary Container */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>الطبيب المعالج:</span>
                <span className="font-bold text-slate-800">
                  {currentDoctor
                    ? `${currentDoctor.name} - ${currentDoctor.specialization}`
                    : "لم يحدد بعد"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>قيمة الكشف:</span>
                <span className="font-bold text-slate-800">
                  {currentDoctor ? `${currentDoctor.price} ج.م` : "0 ج.م"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>الموعد المختار:</span>
                <span className="font-bold text-slate-800">
                  20/8/2023 - 10:00 صباحا
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-blue-100 active:scale-[0.99]"
            >
              تأكيد حجز الموعد بالنظام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
