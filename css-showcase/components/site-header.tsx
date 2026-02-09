"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SearchMagnifier } from "@/components/icons/streamline-icons"

import { navigationSections } from "@/lib/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchDialog } from "@/components/search-dialog"

/** Resolve the current pathname to a section + page breadcrumb trail. */
function useBreadcrumbs() {
  const pathname = usePathname()

  if (!pathname || pathname === "/") return null

  for (const section of navigationSections) {
    const item = section.items.find((i) => i.href === pathname)
    if (item) {
      return { section: section.title, page: item.title }
    }
  }

  // Fallback: derive from the slug
  const slug = pathname.replace(/^\//, "")
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return { section: null, page: title }
}

export function SiteHeader() {
  const breadcrumbs = useBreadcrumbs()
  const [searchOpen, setSearchOpen] = React.useState(false)

  // Global Cmd+K / Ctrl+K keyboard shortcut
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-md">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4!" />

        {/* Breadcrumbs — contextual navigation */}
        <div className="flex flex-1 items-center">
          {breadcrumbs ? (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.section && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <span className="text-muted-foreground">
                        {breadcrumbs.section}
                      </span>
                    </BreadcrumbItem>
                  </>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumbs.page}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          ) : (
            <span className="text-sm font-medium text-foreground font-display">
              CSS Showcase
            </span>
          )}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-1">
          {/* Search trigger — opens Cmd+K dialog */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden h-8 gap-2 px-2 text-muted-foreground sm:flex"
                  aria-label="Search (⌘K)"
                  onClick={() => setSearchOpen(true)}
                >
                  <SearchMagnifier className="size-3.5" aria-hidden />
                  <span className="text-xs">Search…</span>
                  <kbd className="pointer-events-none ml-1 hidden select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-60 sm:inline-flex">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                Search pages (⌘K)
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Mobile search — icon only */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="sm:hidden"
                  aria-label="Search"
                  onClick={() => setSearchOpen(true)}
                >
                  <SearchMagnifier className="size-4" aria-hidden />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Search</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Separator orientation="vertical" className="mx-1 hidden h-4! sm:block" />

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
