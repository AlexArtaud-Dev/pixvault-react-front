import {
    Sidebar,
} from "@/components/ui/sidebar.tsx"
import {SubSidebarHeader} from "@/components/custom/sidebar/_subs/_sidebar_header.tsx";
import {SubSidebarBody} from "@/components/custom/sidebar/_subs/_sidebar_body.tsx";
import {SubSidebarFooter} from "@/components/custom/sidebar/_subs/_sidebar_footer.tsx";
import {sidebarItemGroups} from "@/router/routes.tsx";


export function AppSidebar() {

    return (
	    <Sidebar>
		  <SubSidebarHeader/>
		  <SubSidebarBody sidebarItemGroups={sidebarItemGroups}/>
		  <SubSidebarFooter/>
	    </Sidebar>
    )
}
