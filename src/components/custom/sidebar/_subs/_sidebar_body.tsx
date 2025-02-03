import { Link, useLocation } from "react-router-dom";

import {
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { GroupCollapsible } from "@/components/custom/sidebar/_subs/_sidebar_group_collapsible";
import { SidebarItemGroup } from "@/types/components/sidebar/type";

type SubSidebarBodyProps = {
    sidebarItemGroups: SidebarItemGroup[];
};

export function SubSidebarBody({ sidebarItemGroups }: SubSidebarBodyProps) {
    // 🔑 Get the current pathname from React Router
    const { pathname } = useLocation();

    return (
          <SidebarContent>
              {sidebarItemGroups.map((group) => (
                    <GroupCollapsible key={group.label} group={group}>
                        <SidebarGroup>
                            {group.collapsible ? (
                                  <>
                                      {/* For collapsible groups, render the label as a trigger */}
                                      <SidebarGroupLabel asChild>
                                          <CollapsibleTrigger className="flex items-center">
                                              {group.label}
                                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                          </CollapsibleTrigger>
                                      </SidebarGroupLabel>

                                      <CollapsibleContent>
                                          <SidebarGroupContent>
                                              <SidebarMenu>
                                                  {group.items.map((item) => (
                                                        <SidebarMenuItem key={item.title}>
                                                            <SidebarMenuButton
                                                                  asChild
                                                                  // 🔑 Compare the current route with the item’s URL
                                                                  isActive={pathname === item.url}
                                                            >
                                                                {/* Use Link from react-router-dom */}
                                                                <Link to={item.url} className="flex items-center space-x-2">
                                                                    <item.icon />
                                                                    <span>{item.title}</span>
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                  ))}
                                              </SidebarMenu>
                                          </SidebarGroupContent>
                                      </CollapsibleContent>
                                  </>
                            ) : (
                                  <>
                                      {/* For non-collapsible groups, render the label and optional action */}
                                      <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                                      <SidebarGroupContent>
                                          <SidebarMenu>
                                              {group.items.map((item) => (
                                                    <SidebarMenuItem key={item.title}>
                                                        <SidebarMenuButton
                                                              asChild
                                                              // 🔑 Same comparison for non-collapsible items
                                                              isActive={pathname === item.url}
                                                        >
                                                            <Link to={item.url} className="flex items-center space-x-2">
                                                                <item.icon />
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                              ))}
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
