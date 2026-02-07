"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function SiteHeader() {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4!" />
      <div className="flex flex-1 items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {/* Breadcrumbs will be added in Task 1.6 */}
        </span>
        <div className="flex items-center gap-2">
          {/* Theme toggle and search trigger will be added in Task 1.6 */}
        </div>
      </div>
    </header>
  )
}
