import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav
      className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-200">
              أ
            </div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              عيادة <span className="text-blue-600">الأمل</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              الرئيسية
            </Link>
            <Link
              to="/doctors"
              className="hover:text-blue-600 transition-colors"
            >
              الأطباء
            </Link>
            <Link
              to="/setAppointements"
              className="hover:text-blue-600 transition-colors"
            >
              احجز موعد
            </Link>
            {user && (
              <Link
                to="/myAppointments"
                className="hover:text-blue-600 transition-colors"
              >
                مواعيدي
              </Link>
            )}
          </div>

          {/* Auth Actions (Clerk Integration) */}
          <div className="flex items-center gap-2">
            <Link
              to={"/setAppointements"}
              className="bg-blue-600 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-sm active:scale-95"
            >
              حجز موعد
            </Link>

            <SignedIn>
              <SignOutButton>
                <button className="flex items-center gap-3 bg-red-600 text-white text-xs md:text-sm font-medium px-5 py-2.5 cursor-pointer hover:bg-red-700 rounded-xl transition-all">
                  تسجيل الخروج
                </button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-green-600 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-green-700 transition-all shadow-sm active:scale-95">
                  تسجيل الدخول
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
