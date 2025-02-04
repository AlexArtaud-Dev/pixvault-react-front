import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/custom/sidebar/app-sidebar.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
	    <SidebarProvider>
		  <AppSidebar/>
		  <main className="w-full h-[100vh] p-4">
			{/*<SidebarTrigger/>*/}
			{children}
		  </main>
		  <Toaster />
	    </SidebarProvider>
    )
}
