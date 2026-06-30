import React, { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import AdminDoctorsTbody from "../../components/AdminDoctorsTbody";
import AddDoctorModal from "../../components/AddDoctorModal";

export default function AdminDoctors({ doctors, setDoctors, getDoctors }) {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (doctor) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-doctor`,
        doctor,
      );
      setDoctors((prev) => [...prev, res.data]);
      toast.success("تم اضافة الطبيب بنجاح");
      reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_API_URL}/delete-doctor/${id}`);
      setDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
      toast.success("تم حذف الطبيب بنجاح");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-slate-800">
              إدارة الطاقم الطبي
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              إضافة، تعديل، أو حذف أطباء من النظام وقاعدة البيانات.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-100"
          >
            + إضافة طبيب جديد
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
          <table className="w-full text-right border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="p-4">اسم الطبيب</th>
                <th className="p-4">التخصص</th>
                <th className="p-4">سعر الكشف</th>
                <th className="p-4">رقم الهاتف</th>
                <th className="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            {!doctors?.length ? (
              <p className="p-4 text-slate-400 text-sm">
                لا يوجد اطباء في النظام
              </p>
            ) : (
              doctors?.map((doctor) => (
                <AdminDoctorsTbody
                  key={doctor.id}
                  doctor={doctor}
                  deleteDoctor={deleteDoctor}
                />
              ))
            )}
          </table>
        </div>

        {showModal && (
          <AddDoctorModal
            setShowModal={setShowModal}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            loading={loading}
            error={error}
          />
        )}
      </div>
    </AdminLayout>
  );
}
