import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MyAppointementsDIV from "../components/MyAppointementsDIV";

export default function MyAppointments() {
  const [myAppointments, setMyAppointments] = useState([]);
  const { user } = useUser();

  const getMyAppointments = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/appointements/${id}`);
      setMyAppointments(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      getMyAppointments(user.id);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">جدول مواعيدي</h1>
          <p className="text-sm text-slate-400 mt-1">
            تابع مواعيد الكشوفات والتقارير الطبية الخاصة بك.
          </p>
        </div>

        <div className="space-y-4">
          {myAppointments.map((app) => (
            <MyAppointementsDIV key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
