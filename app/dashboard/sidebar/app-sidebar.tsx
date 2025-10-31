"use client";

import * as React from "react";
import {
  CreditCard,
  LayoutDashboard,
  TrendingUp,
  Settings,
  Upload,
} from "lucide-react";

import { NavMain } from "@/app/dashboard/sidebar/nav-main";
import { NavProjects } from "@/app/dashboard/sidebar/nav-projects";
import { NavUser } from "@/app/dashboard/sidebar/nav-user";
import { Logo } from "@/components/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// PointPilot navigation data
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "My Cards",
      url: "/dashboard/cards",
      icon: CreditCard,
      items: [
        {
          title: "All Cards",
          url: "/dashboard/cards",
        },
        {
          title: "Add New Card",
          url: "/dashboard/cards/new",
        },
      ],
    },
    {
      title: "Insights",
      url: "/dashboard/insights",
      icon: TrendingUp,
      items: [
        {
          title: "Spending Analysis",
          url: "/dashboard/insights/spending",
        },
        {
          title: "Recommendations",
          url: "/dashboard/insights/recommendations",
        },
      ],
    },
    {
      title: "Upload Statement",
      url: "/dashboard/upload",
      icon: Upload,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="ml-3 mt-3">
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
