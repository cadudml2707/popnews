import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "../Sidebar/index";
import NavigationMenuBar from "../Navigation Menu/index"
import Footer from "@/components/Footer/index"

export default function Layout({ children }: { children: React.ReactNode }) {
  const admin = false
  return (
    <SidebarProvider className="flex text-white ">
      {(admin &&
        <Sidebar />
      )}
      <main className="flex-1 bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:24px_24px]">
        <div className="flex justify-center items-center w-full bg-linear-to-r from-cyan-500 to-blue-500 p-1">
          <span className="text-xl font-bold text-white">PopNews</span>
        </div>
        <NavigationMenuBar />
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  )
}