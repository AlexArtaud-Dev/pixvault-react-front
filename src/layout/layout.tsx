import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/custom/sidebar/app-sidebar.tsx";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
	    <SidebarProvider>
		  <AppSidebar/>
		  <main>
			<SidebarTrigger/>
			{children}
		  </main>
	    </SidebarProvider>
    )
}
