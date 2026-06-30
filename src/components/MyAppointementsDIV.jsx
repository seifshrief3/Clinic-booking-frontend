import React from "react";

const MyAppointementsDIV = ({ app }) => {
  return (
    <div
      key={app.id}
      className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all hover:border-slate-200"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-3 h-12 rounded-full ${app.status === "مكتمب" ? "bg-emerald-500" : "bg-slate-300"}`}
        ></div>
        <div>
          <h3 className="font-bold text-slate-800 text-base">
            {app.doctor_name}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">{app.specialization}</p>
          <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
            <span>
              📅{" "}
              {new Date(app.appointment_date).toLocaleString("ar-EG", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <span>⏰ {app.time}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-50">
        <div>
          <p className="text-[10px] text-slate-400 sm:text-left">الحالة</p>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md ${app.status === "مكتمل" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}
          >
            {app.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyAppointementsDIV;
