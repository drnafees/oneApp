import { AppSidebar } from "@/components/navigation/app-sidebar.tsx"
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx"
import { Outlet, useLocation } from "react-router-dom";
import generateBreadcrumbs from "@/functions/generateBreadcrumbs.tsx";
import {useInitUser} from "@/functions/useInitUser.tsx";
import LoadingPage from "../placeholders/Loading.tsx";

export default function DashboardLayout() {
  const loading = useInitUser();
  if (loading) {
    return <LoadingPage/>;
  }

  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='bg-white'>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Outlet/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
