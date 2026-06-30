import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import MyAppointements from "./pages/MyAppointements";
import Dashboard from "./pages/admin/Dashboard";
import Appointemetns from "./pages/admin/Appointemetns";
import Navbar from "./components/Navbar";
import AdminDoctors from "./pages/admin/AdminDoctors";
import SetAppointment from "./pages/SetAppointment";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

function App() {
  const location = useLocation();
  const { user, isLoaded } = useUser();
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const isAdminPage = location.pathname.startsWith("/admin");

  const isAdmin = user?.publicMetadata?.role === "admin";

  const getDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:3000/doctors");
      setDoctors(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:3000/appointements");
      setAppointments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* USER PAGES */}
        <Route
          path="/"
          element={
            isLoaded && isAdmin ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <Home doctors={doctors} getDoctors={getDoctors} />
            )
          }
        />
        <Route
          path="/doctors"
          element={
            isLoaded && isAdmin ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <Doctors
                doctors={doctors}
                setDoctors={setDoctors}
                getDoctors={getDoctors}
              />
            )
          }
        />
        <Route
          path="/myAppointments"
          element={
            isLoaded && isAdmin ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <MyAppointements />
            )
          }
        />
        <Route
          path="/setAppointements"
          element={
            isLoaded && isAdmin ? (
              <Navigate to="/admin/dashboard" replace />
            ) : (
              <SetAppointment doctors={doctors} getDoctors={getDoctors} />
            )
          }
        />

        {/* ADMIN PAGES (Protected) */}
        <Route
          path="/admin/dashboard"
          element={
            isLoaded && !isAdmin ? (
              <Navigate to="/" replace />
            ) : (
              <Dashboard
                doctors={doctors}
                appointments={appointments}
                getDoctors={getDoctors}
                getAppointments={getAppointments}
              />
            )
          }
        />
        <Route
          path="/admin/doctors"
          element={
            isLoaded && !isAdmin ? (
              <Navigate to="/" replace />
            ) : (
              <AdminDoctors
                doctors={doctors}
                setDoctors={setDoctors}
                getDoctors={getDoctors}
              />
            )
          }
        />
        <Route
          path="/admin/appointments"
          element={
            isLoaded && !isAdmin ? (
              <Navigate to="/" replace />
            ) : (
              <Appointemetns
                appointments={appointments}
                setAppointments={setAppointments}
                getAppointments={getAppointments}
              />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
