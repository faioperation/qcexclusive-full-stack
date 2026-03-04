import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/ui/header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen bg-[#fafafa] w-full">
        <Header />
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
