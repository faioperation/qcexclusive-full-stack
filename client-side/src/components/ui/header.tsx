"use client";

import React from "react";
import { Bell, ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  let title = "Dashboard";
  if (pathname.includes("config")) title = "Add Admin"; // According to Figma, config route shows "Add Admin" in header
  if (pathname.includes("profile")) title = "Profile";
  if (pathname.includes("docs-link")) title = "Docs Link";
  if (pathname.includes("leads")) title = "Leads";
  if (pathname.includes("inbox")) title = "Inbox";
  if (pathname.includes("calendar")) title = "Calender";
  if (pathname.includes("add-admin")) title = "Add Admin";
  
  const showBack = pathname !== "/";

  return (
    <header className="h-[72px] bg-white border-b border-gray-100 px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-4">
        {showBack && (
          <button 
            onClick={() => router.back()} 
            className="text-gray-800 hover:text-black transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f0f0f0] overflow-hidden flex-shrink-0">
            <img 
              src="https://ui-avatars.com/api/?name=Akash+Rohman&background=E5E7EB&color=374151" 
              alt="User" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex flex-col hidden sm:flex">
            <span className="text-sm font-semibold text-gray-900">Akash Rohman</span>
            <span className="text-xs text-gray-500 font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
