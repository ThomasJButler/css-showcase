"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="text-sm font-bold font-display">C</span>
          </div>
          <span className="text-sm font-semibold tracking-tight font-display">
            CSS Showcase
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* Navigation sections will be added in Task 1.5 */}
      </SidebarContent>
      <SidebarFooter>
        {/* Footer content will be added in Task 1.5 */}
      </SidebarFooter>
    </Sidebar>
  )
}
