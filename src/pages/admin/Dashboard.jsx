import React, { useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function Dashboard({
  doctors,
  appointments,
  getDoctors,
  getAppointments,
}) {
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "قيد الانتظار",
  );

  const latestAppointments = [...appointments]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  useEffect(() => {
    getDoctors();
    getAppointments();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-black text-slate-800">نظرة عامة</h1>
          <p className="text-xs text-slate-400 mt-1">
            متابعة مؤشرات أداء العيادة وأعداد المرضى اليوم.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <p className="text-xs text-slate-400 font-medium">إجمالي الأطباء</p>
            <p className="text-3xl font-bold text-slate-800 mt-2">
              {doctors.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <p className="text-xs text-slate-400 font-medium">
              اجمالي الحجوزات
            </p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {appointments.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
            <p className="text-xs text-slate-400 font-medium">
              الحجوزات المعلقة
            </p>
            <p className="text-3xl font-bold text-amber-500 mt-2">
              {pendingAppointments.length}
            </p>
          </div>
        </div>

        {/* Visual Element Placeholder (Activity) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm">
          <h3 className="font-bold text-slate-800 text-sm mb-4">
            نشاطات النظام الأخيرة
          </h3>

          <div className="space-y-3">
            {latestAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl flex justify-between"
              >
                <span>
                  تم حجز موعد مع د. {appointment.doctor_name} بواسطة{" "}
                  {appointment.patient_name}
                </span>

                <span className="text-slate-400">
                  {new Date(appointment.appointment_date).toLocaleString(
                    "ar-EG",
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
