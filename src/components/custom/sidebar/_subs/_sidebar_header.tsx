import {SidebarHeader} from "@/components/ui/sidebar.tsx";

import logo from "@/assets/pixvault.png";
import {ThemeSwitch} from "@/components/custom/theme/theme-switch.tsx";

export function SubSidebarHeader() {

    return (
	    <SidebarHeader>
		  <div className="w-full h-full flex flex-row gap-2 items-center justify-between border bg-sidebar-accent p-2 rounded-md shadow-sm">
			<div className="flex flex-row gap-2 items-center">
			    <img src={logo} alt="logo" className="w-7 h-6"/>
			    <h2 className="text-lg font-semibold text-primary">Pixvault</h2>
			</div>
			<ThemeSwitch/>
		  </div>
	    </SidebarHeader>
    )
}