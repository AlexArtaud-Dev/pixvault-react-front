import * as React from "react";

export type SidebarItemGroup = {
    label: string,
    collapsible: boolean,
    defaultOpen: boolean,
    items: SidebarItem[],
}

export type SidebarItem = {
    title: string
    url: string
    icon: React.ElementType
}