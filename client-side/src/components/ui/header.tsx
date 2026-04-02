"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, ArrowLeft, LogOut, User, Settings as SettingsIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useUser } from "@/context/UserContext";
import { logoutUser } from "@/services/auth/auth.apis";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, setUser } = useUser();

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let title = "Dashboard";
  if (pathname.includes("config")) title = "Config";
  if (pathname.includes("profile")) title = "Profile";
  if (pathname.includes("docs-link")) title = "Docs Link";
  if (pathname.includes("leads")) title = "Leads";
  if (pathname.includes("inbox")) title = "Inbox";
  if (pathname.includes("calendar")) title = "Calendar";
  if (pathname.includes("add-admin")) title = "Add Admin";
  if (pathname.includes("media-post")) title = "Media Post";

  const showBack = pathname !== "/";

  const notifications = [
    { id: 1, title: "New Lead Added", desc: "A new lead has been scraped.", time: "2 min ago" },
    { id: 2, title: "Meeting Scheduled", desc: "You have an upcoming meeting.", time: "1 hour ago" },
    { id: 3, title: "Message Received", desc: "A lead replied to your outreach.", time: "Yesterday" },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
    }
  };

  const displayName = user?.name ?? "User";
  const displayRole = user?.role ?? "";

  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };
  const initials = getInitials(displayName);

  return (
    <header className="h-[72px] bg-white border-b border-gray-100 px-6 flex items-center justify-between shrink-0 relative z-20">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1 lg:hidden" />
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

        {/* Notifications Dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setIsNotifOpen(!isNotifOpen); setIsProfileOpen(false); }}
            className="relative text-gray-600 hover:text-gray-900 transition-colors p-1"
          >
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {isNotifOpen && (
            <div className="absolute -right-12 sm:right-0 mt-3 w-[290px] sm:w-80 bg-white rounded-[16px] shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 z-50">
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#FAFBFD]">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                <span className="text-xs text-[#00A651] font-semibold bg-[#E5F6EC] px-2 py-1 rounded-[6px]">3 New</span>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer">
                    <p className="text-sm font-semibold text-gray-900 mb-0.5">{notif.title}</p>
                    <p className="text-xs text-gray-500 mb-1">{notif.desc}</p>
                    <p className="text-[10px] font-medium text-gray-400">{notif.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 text-center border-t border-gray-100 text-sm text-[#00A651] font-semibold hover:bg-gray-50 cursor-pointer transition-colors">
                View All Notifications
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotifOpen(false); }}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            {/* Avatar with Initials */}
            <div className="w-10 h-10 rounded-full bg-[#E5F6EC] flex-shrink-0 border border-[#b6e8cf] flex items-center justify-center">
              <span className="text-sm font-semibold text-[#00A651] leading-none">
                {initials}
              </span>
            </div>

            <div className="flex-col hidden sm:flex">
              <span className="text-sm font-semibold text-gray-900">{displayName}</span>
              <span className="text-xs text-gray-500 font-medium">{displayRole}</span>
            </div>
          </div>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-[16px] shadow-lg border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-gray-100 bg-[#FAFBFD] flex items-center gap-3">
                {/* Mini avatar inside dropdown */}
                <div className="w-9 h-9 rounded-full bg-[#E5F6EC] border border-[#b6e8cf] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-semibold text-[#00A651] leading-none">
                    {initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{displayName}</p>
                  <p className="text-xs text-gray-500">{user?.email ?? ""}</p>
                </div>
              </div>
              <div className="p-2 flex flex-col gap-1">
                <Link
                  href="/profile"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-[8px] text-sm font-medium text-gray-700 transition-colors"
                >
                  <User size={16} className="text-gray-400" />
                  My Profile
                </Link>
                <Link
                  href="/config"
                  onClick={() => setIsProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-[8px] text-sm font-medium text-gray-700 transition-colors"
                >
                  <SettingsIcon size={16} className="text-gray-400" />
                  Configurations
                </Link>
              </div>
              <div className="p-2 border-t border-gray-100">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-red-50 rounded-[8px] text-sm font-medium text-red-600 transition-colors"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}