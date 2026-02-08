import type { ComponentType, SVGProps } from "react"
import {
  BookFlipPage,
  LayoutsArray,
  MagicWand,
  OrganizationFiles,
  ProgrammingCodeIdea,
  ProductLaunchLaptop,
  BookLibraryShelf,
} from "@/components/icons/streamline-icons"

export type NavItem = {
  title: string
  href: string
}

export type NavSection = {
  title: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  accentColor: string
  items: NavItem[]
}

export const navigationSections: NavSection[] = [
  {
    title: "Fundamentals",
    icon: BookFlipPage,
    accentColor: "oklch(0.52 0.12 145)",
    items: [
      { title: "Basic CSS", href: "/basic" },
      { title: "Box Model", href: "/box-model" },
      { title: "Typography", href: "/typography" },
    ],
  },
  {
    title: "Layout",
    icon: LayoutsArray,
    accentColor: "oklch(0.58 0.10 230)",
    items: [
      { title: "Flexbox", href: "/flexbox" },
      { title: "Flexbox Patterns", href: "/flexbox-patterns" },
      { title: "Grid", href: "/grid" },
      { title: "CSS Layout Techniques", href: "/layout" },
      { title: "Responsive Design", href: "/responsive" },
    ],
  },
  {
    title: "Visual Effects",
    icon: MagicWand,
    accentColor: "oklch(0.65 0.15 40)",
    items: [
      { title: "Gradients", href: "/gradients" },
      { title: "Gradient Patterns", href: "/gradient-patterns" },
      { title: "Transitions", href: "/transitions" },
      { title: "Animations", href: "/animations" },
      { title: "Filters & Effects", href: "/filters" },
    ],
  },
  {
    title: "Components",
    icon: OrganizationFiles,
    accentColor: "oklch(0.55 0.08 65)",
    items: [
      { title: "Buttons", href: "/buttons" },
      { title: "Forms", href: "/forms" },
      { title: "Tables", href: "/tables" },
      { title: "Cards", href: "/cards" },
      { title: "Icons", href: "/icons" },
    ],
  },
  {
    title: "Advanced",
    icon: ProgrammingCodeIdea,
    accentColor: "oklch(0.60 0.16 350)",
    items: [
      { title: "Advanced CSS", href: "/advanced" },
      { title: "Custom Properties", href: "/custom-properties" },
      { title: "Blend Modes", href: "/blend-modes" },
      { title: "Shapes & Clips", href: "/shapes-clips" },
    ],
  },
  {
    title: "Modern CSS",
    icon: ProductLaunchLaptop,
    accentColor: "oklch(0.55 0.12 180)",
    items: [
      { title: ":has() Selector", href: "/has-selector" },
      { title: "Container Queries", href: "/container-queries" },
      { title: "CSS Nesting", href: "/css-nesting" },
      { title: "Anchor Positioning", href: "/anchor-positioning" },
      { title: "Scroll Animations", href: "/scroll-animations" },
      { title: "Colour Spaces", href: "/color-spaces" },
    ],
  },
  {
    title: "Resources",
    icon: BookLibraryShelf,
    accentColor: "oklch(0.65 0.14 75)",
    items: [
      { title: "CSS Tools", href: "/tools" },
      { title: "Frameworks", href: "/frameworks" },
    ],
  },
]

/** Flat list of all navigation items for search indexing */
export const allNavigationItems: NavItem[] = navigationSections.flatMap(
  (section) => section.items
)
