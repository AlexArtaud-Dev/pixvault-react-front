import {
    Sidebar,
} from "@/components/ui/sidebar.tsx"
import {SubSidebarHeader} from "@/components/custom/sidebar/_subs/_sidebar_header.tsx";
import {SubSidebarBody} from "@/components/custom/sidebar/_subs/_sidebar_body.tsx";
import {SubSidebarFooter} from "@/components/custom/sidebar/_subs/_sidebar_footer.tsx";
import {SidebarItemGroup} from "@/types/components/sidebar/type.ts";
import {ContactIcon, HomeIcon, InfoIcon} from "lucide-react";


export function AppSidebar() {

    const sidebarItemGroups: SidebarItemGroup[] = [
	  {
		label: "Application",
		collapsible: true,
		defaultOpen: true,
		items: [
		    {title: "Home", url: "/", icon: HomeIcon,},
		    {title: "About", url: "/about", icon: InfoIcon,},
		    {title: "Contact", url: "/contact", icon: ContactIcon,},
		]
	  }
    ];

    return (
	    <Sidebar>
		  <SubSidebarHeader/>
		  <SubSidebarBody sidebarItemGroups={sidebarItemGroups}/>
		  <SubSidebarFooter/>
	    </Sidebar>
    )
}
