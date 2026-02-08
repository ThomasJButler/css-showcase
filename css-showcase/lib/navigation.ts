import {
  BookOpen,
  LayoutGrid,
  Sparkles,
  FileStack,
  FlaskConical,
  Rocket,
  Library,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
}

export type NavSection = {
  title: string
  icon: LucideIcon
  items: NavItem[]
}

export const navigationSections: NavSection[] = [
  {
    title: "Fundamentals",
    icon: BookOpen,
    items: [
      { title: "Basic CSS", href: "/basic" },
      { title: "Box Model", href: "/box-model" },
      { title: "Typography", href: "/typography" },
    ],
  },
  {
    title: "Layout",
    icon: LayoutGrid,
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
    icon: Sparkles,
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
    icon: FileStack,
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
    icon: FlaskConical,
    items: [
      { title: "Advanced CSS", href: "/advanced" },
      { title: "Custom Properties", href: "/custom-properties" },
      { title: "Blend Modes", href: "/blend-modes" },
      { title: "Shapes & Clips", href: "/shapes-clips" },
    ],
  },
  {
    title: "Modern CSS",
    icon: Rocket,
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
    icon: Library,
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
