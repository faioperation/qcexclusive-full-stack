"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

import {
  LayoutDashboard,
  Users,
  Inbox,
  CalendarDays,
  Link as LinkIcon,
  UserPlus,
  LogOut,
  TableProperties,
  ImagePlay,
} from "lucide-react";
import Link from "next/link";
import { logoutUser } from "@/services/auth/auth.apis";
import { ERole } from "@/services/auth/auth.types";
import { useUser } from "@/context/UserContext";

const data = {
  navMain: [
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, url: "/" },
    { title: "Leads", icon: <Users size={20} />, url: "/leads" },
    { title: "Inbox", icon: <Inbox size={20} />, url: "/inbox" },
    { title: "Calendar", icon: <CalendarDays size={20} />, url: "/calendar" },
    { title: "Config", icon: <TableProperties size={20} />, url: "/config" },
    { title: "Docs Link", icon: <LinkIcon size={20} />, url: "/docs-link" },
    { title: "Media Post", icon: <ImagePlay size={20} />, url: "/media-post" },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, setUser } = useUser();

  const isAdmin = user?.role === ERole.Admin;

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

  const navItems = isAdmin
    ? [
        ...data.navMain,
        { title: "Add Admin", icon: <UserPlus size={20} />, url: "/add-admin" },
      ]
    : data.navMain;

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  alt="QC Exclusive"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-4xl font-black pl-5 text-gray-600">
                    LoGo
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => {
              const isActive =
                pathname === item.url ||
                (item.url !== "/" && pathname.startsWith(item.url));

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    className={`py-6 transition-all rounded-r-md rounded-l-none border-l-[3px] ${
                      isActive
                        ? "bg-[#E5F6EC] text-[#00A651] border-[#00A651] hover:bg-[#D1EEDB] hover:text-[#00A651]"
                        : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Link
                      href={item.url}
                      className="font-medium text-[15px] flex items-center"
                    >
                      {item.icon}
                      <span className="ml-1">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer text-gray-500 font-medium py-6"
            >
              <LogOut size={20} />
              <span className="ml-1 text-[15px]">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
