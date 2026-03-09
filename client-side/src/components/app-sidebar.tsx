"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

import {
  LayoutDashboard,
  Users,
  Inbox,
  CalendarDays,
  Settings,
  Link as LinkIcon,
  UserPlus,
  LogOut,
  TableConfig
} from "lucide-react";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      url: "/",
    },
    {
      title: "Leads",
      icon: <Users size={20} />,
      url: "/leads",
    },
    {
      title: "Inbox",
      icon: <Inbox size={20} />,
      url: "/inbox",
    },
    {
      title: "Calender",
      icon: <CalendarDays size={20} />,
      url: "/calendar",
    },
    {
      title: "Config",
      icon: <TableConfig size={20} />,
      url: "/config",
    },
    {
      title: "Docs link",
      icon: <LinkIcon size={20} />,
      url: "/docs-link",
    },
    {
      title: "Add Admin",
      icon: <UserPlus size={20} />,
      url: "/add-admin",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <Image
                  src={"/logo.png"}
                  alt="Automated AI Lead Generation"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-4xl font-black pl-5 text-gray-600">
                    LoGo
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => {
              const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url));
              
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
                    <Link href={item.url} className="font-medium text-[15px] flex items-center">
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
              asChild
              className="hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer text-gray-500 font-medium"
            >
              <a href="/login" className="py-6">
                <LogOut size={20} />
                <span className="ml-1 text-[15px]">Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
