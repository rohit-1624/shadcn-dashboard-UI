import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Aarav Singh",
    email: "aarav.singh@abun.com",
    avatar: "/avatars/aarav.jpg",
  },
  teams: [
    {
      name: "Abun Inc.",
      logo: GalleryVerticalEnd, // replace with real logo component
      plan: "Enterprise",
    },
    {
      name: "Tech Innovators",
      logo: AudioWaveform,
      plan: "Professional",
    },
    {
      name: "Startup Hub",
      logo: Command,
      plan: "Free Trial",
    },
  ],
  navMain: [
    {
      title: "Inbox",
      url: "/inbox",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "All Conversations",
          url: "/inbox/all",
        },
        {
          title: "Assigned to Me",
          url: "/inbox/assigned",
        },
        {
          title: "Unread",
          url: "/inbox/unread",
        },
      ],
    },
    {
      title: "AI Copilot",
      url: "/ai-copilot",
      icon: Bot,
      items: [
        {
          title: "Compose Message",
          url: "/ai-copilot/compose",
        },
        {
          title: "Suggestions",
          url: "/ai-copilot/suggestions",
        },
        {
          title: "Settings",
          url: "/ai-copilot/settings",
        },
      ],
    },
    {
      title: "Knowledge Base",
      url: "/docs",
      icon: BookOpen,
      items: [
        {
          title: "FAQs",
          url: "/docs/faqs",
        },
        {
          title: "Tutorials",
          url: "/docs/tutorials",
        },
        {
          title: "API Reference",
          url: "/docs/api",
        },
        {
          title: "Release Notes",
          url: "/docs/release-notes",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "/settings/profile",
        },
        {
          title: "Team & Permissions",
          url: "/settings/team",
        },
        {
          title: "Subscription & Billing",
          url: "/settings/billing",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Customer Engagement",
      url: "/projects/customer-engagement",
      icon: Frame,
    },
    {
      name: "Product Analytics",
      url: "/projects/product-analytics",
      icon: PieChart,
    },
    {
      name: "Market Research",
      url: "/projects/market-research",
      icon: Map,
    },
  ],
};


export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
