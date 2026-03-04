import * as React from "react";

import {
  Sidebar,
  SidebarContent,
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
  UserPlus 
} from "lucide-react";

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
      icon: <Settings size={20} />,
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
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.icon}
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
