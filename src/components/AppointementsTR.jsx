import React from "react";

const AppointementsTR = ({ appointment, updateStatus }) => {
  return (
    <tr key={appointment.id} className="border-b border-slate-100">
      <td className="p-4 font-medium">{appointment.patient_name}</td>

      <td className="p-4">{appointment.doctor_name}</td>

      <td className="p-4">
        {new Date(appointment.appointment_date).toLocaleString("ar-EG", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </td>

      <td className="p-4">
        <select
          value={appointment.status}
          onChange={(e) => updateStatus(appointment.id, e.target.value)}
          className="border border-slate-200 rounded-lg px-2 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="قيد الانتظار">قيد الانتظار</option>
          <option value="تم التأكيد">تم التأكيد</option>
          <option value="مكتمل">مكتمل</option>
          <option value="ملغي">ملغي</option>
        </select>
      </td>
    </tr>
  );
};

export default AppointementsTR;
