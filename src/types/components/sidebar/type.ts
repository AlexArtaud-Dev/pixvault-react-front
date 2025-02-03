// src/types/components/sidebar/type.ts
import * as React from "react";

export type SidebarItem = {
    title: string;
    url: string;
    icon: React.ElementType;
    // Optionally, you can add allowedRoles per item:
    allowedRoles?: string[];
};

export type SidebarItemGroup = {
    label: string;
    collapsible: boolean;
    defaultOpen: boolean;
    // The group is only shown if the user has at least one of these roles.
    allowedRoles?: string[];
    items: SidebarItem[];
};
