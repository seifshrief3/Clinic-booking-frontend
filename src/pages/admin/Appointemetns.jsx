import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import axios from "axios";
import AppointementsTR from "../../components/AppointementsTR";

export default function Appointments({
  appointments,
  setAppointments,
  getAppointments,
}) {
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:3000/edit-appointement/${id}`, {
        status,
      });

      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === id ? { ...appointment, status } : appointment,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-black text-slate-800">
            كشوفات وحجوزات العيادة
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            تأكيد، تأجيل، أو متابعة كافة الطلبات المحجوزة من المرضى.
          </p>
        </div>

        {/* Table layout for appointments */}
        <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
          <table className="w-full text-right border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-4">اسم المريض</th>
                <th className="p-4">الطبيب المختص</th>
                <th className="p-4">تاريخ الموعد</th>
                <th className="p-4">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {appointments.map((appointment) => (
                <AppointementsTR
                  key={appointment.id}
                  appointment={appointment}
                  updateStatus={updateStatus}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
