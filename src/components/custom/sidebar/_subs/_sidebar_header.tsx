import {SidebarHeader} from "@/components/ui/sidebar.tsx";
import {AppWindowIcon} from "lucide-react";

export function SubSidebarHeader() {
    return (
	    <SidebarHeader>
		  <div className="flex items-center space-x-2">
			<AppWindowIcon/>
			<h2 className="text-lg font-semibold text-primary">Pixvault</h2>
		  </div>

	    </SidebarHeader>
    )
}