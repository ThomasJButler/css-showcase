"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggle}
            aria-label={mounted ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
            className="relative overflow-hidden"
          >
            {/* Sun icon — visible in light mode */}
            <Sun
              className="size-4 rotate-0 scale-100 transition-transform duration-300 ease-out dark:-rotate-90 dark:scale-0"
              aria-hidden
            />
            {/* Moon icon — visible in dark mode */}
            <Moon
              className="absolute size-4 rotate-90 scale-0 transition-transform duration-300 ease-out dark:rotate-0 dark:scale-100"
              aria-hidden
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {mounted
            ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
            : "Toggle theme"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
