"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import {
  BookFlipPage,
  LayoutsArray,
  MagicWand,
  OrganizationFiles,
  ProgrammingCodeIdea,
  ProductLaunchLaptop,
  BookLibraryShelf,
  AppWindowSourceCode,
} from "@/components/icons/streamline-icons"

import { navigationSections, type NavSection } from "@/lib/navigation"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command"

/** Map section titles to their icons for display in search results. */
const sectionIcons: Record<string, React.ElementType> = {
  Fundamentals: BookFlipPage,
  Layout: LayoutsArray,
  "Visual Effects": MagicWand,
  Components: OrganizationFiles,
  Advanced: ProgrammingCodeIdea,
  "Modern CSS": ProductLaunchLaptop,
  Resources: BookLibraryShelf,
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()

  const handleSelect = React.useCallback(
    (href: string) => {
      onOpenChange(false)
      router.push(href)
    },
    [router, onOpenChange]
  )

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search pages"
      description="Search all CSS Showcase pages by name"
    >
      <CommandInput placeholder="Search pages…" />
      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-1.5 py-4">
            <AppWindowSourceCode className="size-10 text-muted-foreground/40" />
            <p className="text-muted-foreground">No pages found.</p>
          </div>
        </CommandEmpty>
        {navigationSections.map((section: NavSection, idx: number) => {
          const Icon = sectionIcons[section.title] ?? AppWindowSourceCode
          return (
            <React.Fragment key={section.title}>
              {idx > 0 && <CommandSeparator />}
              <CommandGroup heading={section.title}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`${section.title} ${item.title}`}
                    onSelect={() => handleSelect(item.href)}
                    className="cursor-pointer"
                  >
                    <Icon className="size-4 text-muted-foreground" />
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          )
        })}
      </CommandList>
    </CommandDialog>
  )
}
