import React from "react";

const AddDoctorModal = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  loading,
}) => {
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-md w-full border border-slate-100 mx-4 shadow-xl">
        <h3 className="font-bold text-base text-slate-800 mb-4">
          بيانات الطبيب الجديد
        </h3>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-[11px] text-slate-500 font-semibold mb-1.5">
              الاسم كاملاً
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full bg-slate-50 border-0 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500/20"
              placeholder="مثال: د. خالد علي"
            />
          </div>

          <div>
            <label className="block text-[11px] text-slate-500 font-semibold mb-1.5">
              التخصص
            </label>
            <input
              {...register("specialization", { required: true })}
              type="text"
              className="w-full bg-slate-50 border-0 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500/20"
              placeholder="مثال: طب وجراحة العيون"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] text-slate-500 font-semibold mb-1.5">
                سعر الكشف (ج.م)
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                className="w-full bg-slate-50 border-0 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500/20"
                placeholder="300"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-500 font-semibold mb-1.5">
                رقم الهاتف
              </label>
              <input
                {...register("phone", { required: true })}
                type="tel"
                className="w-full bg-slate-50 border-0 rounded-xl p-3 text-xs focus:ring-2 focus:ring-blue-500/20 text-left"
                placeholder="010XXXXXXXX"
                dir="ltr"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white text-xs font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              {loading ? "جاري اضافة الطبيب..." : "حفظ البيانات"}
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 bg-slate-100 text-slate-600 text-xs font-semibold py-3 rounded-xl hover:bg-slate-200 transition-colors"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorModal;
