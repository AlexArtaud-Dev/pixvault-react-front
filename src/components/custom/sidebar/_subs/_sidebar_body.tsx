// src/components/custom/sidebar/_subs/_sidebar_body.tsx
import {Link, useLocation} from "react-router-dom";
import {useAuth} from "@/contexts/AuthContext.tsx";
import {routes as appRoutes} from "@/router/routes.tsx";
import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {CollapsibleTrigger, CollapsibleContent} from "@/components/ui/collapsible";
import {ChevronDown} from "lucide-react";
import {GroupCollapsible} from "@/components/custom/sidebar/_subs/_sidebar_group_collapsible";
import {SidebarItemGroup} from "@/types/components/sidebar/type";

type SubSidebarBodyProps = {
    sidebarItemGroups: SidebarItemGroup[];
};

export function SubSidebarBody({sidebarItemGroups}: SubSidebarBodyProps) {
    // Get the current pathname from React Router.
    const {pathname} = useLocation();
    const {user} = useAuth();

    // Filter out groups that specify allowedRoles and the user does not have any matching role.
    const allowedGroups = sidebarItemGroups.filter((group) => {
	  if (!group.allowedRoles) return true;
	  return user && group.allowedRoles.some((role) => user.roles.includes(role));
    });

    // Helper function to render a single menu item.
    const renderMenuItem = (item: { title: string; url: string; icon: React.ElementType; allowedRoles?: string[] }) => {
	  // Look up the matching route in our centralized routes.
	  const routeInfo = appRoutes.find((r) => r.path === item.url);
	  const isProtected = routeInfo?.protected;
	  // If the item itself has allowedRoles, check those too (optional).
	  const itemAllowed = item.allowedRoles
		  ? user && item.allowedRoles.some((role) => user.roles.includes(role))
		  : true;

	  // Determine if the user can access the route:
	  // - If not protected, it’s always allowed.
	  // - Otherwise, the user must be logged in and have at least one of the allowed roles.
	  const allowed =
		  !isProtected ||
		  (user && routeInfo?.allowedRoles && routeInfo.allowedRoles.some((role) => user.roles.includes(role)));

	  const canAccess = allowed && itemAllowed;

	  return (
		  <SidebarMenuItem key={item.title}>
			{canAccess ? (
				<SidebarMenuButton asChild isActive={pathname === item.url}>
				    <Link to={item.url} className="flex items-center space-x-2">
					  <item.icon/>
					  <span>{item.title}</span>
				    </Link>
				</SidebarMenuButton>
			) : (
				// Render non-clickable (disabled) item if the user is not allowed.
				<SidebarMenuButton asChild disabled isActive={pathname === item.url}>
            <span className="flex items-center space-x-2 text-gray-400 cursor-not-allowed">
              <item.icon/>
              <span>{item.title}</span>
            </span>
				</SidebarMenuButton>
			)}
		  </SidebarMenuItem>
	  );
    };

    return (
	    <SidebarContent>
		  {allowedGroups.map((group) => (
			  <GroupCollapsible key={group.label} group={group}>
				<SidebarGroup>
				    {group.collapsible ? (
					    <>
						  {/* For collapsible groups, render the label as a trigger */}
						  <SidebarGroupLabel asChild>
							<CollapsibleTrigger className="flex items-center">
							    {group.label}
							    <ChevronDown
								    className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
							</CollapsibleTrigger>
						  </SidebarGroupLabel>
						  <CollapsibleContent>
							<SidebarGroupContent>
							    <SidebarMenu>
								  {group.items.map(renderMenuItem)}
							    </SidebarMenu>
							</SidebarGroupContent>
						  </CollapsibleContent>
					    </>
				    ) : (
					    <>
						  {/* For non-collapsible groups */}
						  <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
						  <SidebarGroupContent>
							<SidebarMenu>
							    {group.items.map(renderMenuItem)}
							</SidebarMenu>
						  </SidebarGroupContent>
					    </>
				    )}
				</SidebarGroup>
			  </GroupCollapsible>
		  ))}
	    </SidebarContent>
    );
}
