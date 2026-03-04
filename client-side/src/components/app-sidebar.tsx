import * as React from "react";
import { LayoutDashboard } from "lucide-react";

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

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      url: "/",
    },
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      url: "/",
    },
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      url: "/",
    },
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      url: "/",
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
