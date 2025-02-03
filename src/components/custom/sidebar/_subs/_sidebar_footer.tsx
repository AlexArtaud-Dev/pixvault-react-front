import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {ChevronUp} from "lucide-react";

export function SubSidebarFooter() {
    return (
	    <SidebarFooter>
		  <SidebarMenu>
			<SidebarMenuItem>
			    <DropdownMenu>
				  <DropdownMenuTrigger asChild>
					<SidebarMenuButton>
					    Username
					    <ChevronUp className="ml-auto"/>
					</SidebarMenuButton>
				  </DropdownMenuTrigger>
				  <DropdownMenuContent
					  side="top"
					  className="w-[--radix-popper-anchor-width]"
				  >
					<DropdownMenuItem>
					    <span>Account</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
					    <span>Billing</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
					    <span>Sign out</span>
					</DropdownMenuItem>
				  </DropdownMenuContent>
			    </DropdownMenu>
			</SidebarMenuItem>
		  </SidebarMenu>
	    </SidebarFooter>
    )
}