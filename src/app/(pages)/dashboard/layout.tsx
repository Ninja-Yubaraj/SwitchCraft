import { type Metadata } from "next";
import Sidebar from "~/components/Sidebar";


export const metadata: Metadata = {
     title: "Dashboard page",
};

export default function DashboardLayout({
     children,
}: Readonly<{ children: React.ReactNode }>) {
     return (
          <div className="flex min-h-screen w-full bg-background relative">
               <Sidebar />
               <div className="flex-1 p-4 lg:p-6 bg-secondary">
                    {children}
               </div>
          </div>
     );
}
