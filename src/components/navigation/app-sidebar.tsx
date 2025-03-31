import * as React from "react"
import {Bell, Combine, FileUser, GraduationCap, LifeBuoy, Mail, Medal, Newspaper, Send, University,} from "lucide-react"
import {NavMain} from "@/components/navigation/nav-main"
import {NavProjects} from "@/components/navigation/nav-projects"
import {NavSecondary} from "@/components/navigation/nav-secondary"
import {NavUser} from "@/components/navigation/nav-user"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import {useStore} from "zustand/react";
import {userStore} from "@/store/user.tsx";
import {User} from "@/types/user.tsx";
import {Link} from "react-router-dom";

const data = {
  navMain: [
    {
      title: "Application",
      url: "/dashboard/application",
      icon: FileUser,
      isActive: true,
      items: [
        {
          title: "Profile",
          url: "/dashboard/application/personal",
        },
        {
          title: "Education",
          url: "/dashboard/application/education",
        },
        {
          title: "Experience",
          url: "/dashboard/application/experience",
        },
        {
          title: "Cover Letter",
          url: "/dashboard/application/letter",
        },
        {
          title: "Documents",
          url: "/dashboard/application/documents",
        }
      ],
    },
    {
      title: "Universities",
      url: "/dashboard/universities",
      icon: University,
      items: [
        {
          title: "All",
          url: "/dashboard/universities",
        },
        {
          title: "Applied",
          url: "/dashboard/universities/applied",
        },
      ],
    },
    {
      title: "Messages",
      url: "/dashboard/messages",
      icon: Mail,
    },
    {
      title: "Notifications",
      url: "/dashboard/notifications",
      icon: Bell,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/dashboard/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/dashboard/feedback",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Leaderboard",
      url: "/dashboard/leaderboard",
      icon: Medal,
    },
    {
      name: "Scholarships",
      url: "/dashboard/scholarships",
      icon: GraduationCap,
    },
    {
      name: "News",
      url: "/dashboard/news",
      icon: Newspaper,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const user: User = useStore(userStore, (state:any) => state.user);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Combine className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">OneApp</span>
                  <span className="truncate text-xs">Applicant Portal</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
