"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  BookOpen,
  LayoutGrid,
  Sparkles,
  FileStack,
  FlaskConical,
  Rocket,
  Library,
  FileText,
} from "lucide-react"

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
  Fundamentals: BookOpen,
  Layout: LayoutGrid,
  "Visual Effects": Sparkles,
  Components: FileStack,
  Advanced: FlaskConical,
  "Modern CSS": Rocket,
  Resources: Library,
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
            <FileText className="size-10 text-muted-foreground/40" />
            <p className="text-muted-foreground">No pages found.</p>
          </div>
        </CommandEmpty>
        {navigationSections.map((section: NavSection, idx: number) => {
          const Icon = sectionIcons[section.title] ?? FileText
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
