import * as React from "react";
import { Collapsible } from "@/components/ui/collapsible.tsx";
import { SidebarItemGroup } from "@/types/components/sidebar/type.ts";

type GroupCollapsibleProps = {
    group: SidebarItemGroup;
    children: React.ReactNode;
};

export function GroupCollapsible({ group, children }: GroupCollapsibleProps) {
    return group.collapsible ? (
	    <Collapsible defaultOpen className="group/collapsible">
		  {children}
	    </Collapsible>
    ) : (
	    <>{children}</>
    );
}
