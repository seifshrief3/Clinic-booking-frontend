import React from "react";

const AdminDoctorsTbody = ({ doctor, deleteDoctor }) => {
  return (
    <tbody className="divide-y divide-slate-100 text-slate-700" key={doctor.id}>
      <tr>
        <td className="p-4 font-bold text-slate-900">{doctor.name}</td>
        <td className="p-4">{doctor.specialization}</td>
        <td className="p-4">{doctor.price} ج.م</td>
        <td className="p-4">{doctor.phone}</td>
        <td className="p-4 text-center">
          <button
            onClick={() => deleteDoctor(doctor.id)}
            className="text-rose-600 bg-rose-50 hover:bg-rose-100 font-medium px-2.5 py-1 rounded-md transition-colors"
          >
            حذف
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default AdminDoctorsTbody;
