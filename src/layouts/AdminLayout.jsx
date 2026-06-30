import { SignedOut, SignOutButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-400 flex flex-col fixed inset-y-0 right-0 z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-white font-bold text-lg">لوحة الإشراف</span>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 text-sm font-medium">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 text-white px-4 py-3 rounded-xl transition-all"
          >
            📊 الإحصائيات العامة
          </Link>
          <Link
            to="/admin/doctors"
            className="flex items-center gap-3 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl transition-all"
          >
            👨‍⚕️ إدارة الأطباء
          </Link>
          <Link
            to="/admin/appointments"
            className="flex items-center gap-3 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl transition-all"
          >
            📅 كل الحجوزات
          </Link>
        </nav>

        <SignOutButton>
          <button className="flex items-center gap-3 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-xl transition-all">
            🚪 تسجيل الخروج
          </button>
        </SignOutButton>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 pr-64">
        {/* Admin Header */}
        <header className="h-16 bg-white border-b border-slate-200/80 sticky top-0 px-8 flex items-center justify-between z-10">
          <h2 className="font-bold text-slate-700 text-sm">
            أهلاً بك يا مدير النظام 👋
          </h2>
        </header>

        {/* Dynamic Inner Component */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
