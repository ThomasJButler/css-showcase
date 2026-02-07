import Link from "next/link"
import { Github, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const categoryLinks = [
  { title: "Fundamentals", href: "/basic" },
  { title: "Layout", href: "/flexbox" },
  { title: "Components", href: "/buttons" },
  { title: "Modern CSS", href: "/has-selector" },
]

const resourceLinks = [
  { title: "Advanced Techniques", href: "/advanced" },
  { title: "Animations", href: "/animations" },
  { title: "Responsive Design", href: "/responsive" },
  { title: "Gradient Patterns", href: "/gradient-patterns" },
]

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/30">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xs font-bold font-display">C</span>
              </div>
              <span className="font-semibold font-display tracking-tight">
                CSS Showcase
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The ultimate CSS reference and learning platform. Explore modern
              techniques, patterns, and best practices.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/ThomasJButler/css-showcase"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </a>
              <span className="text-border" aria-hidden="true">
                &middot;
              </span>
              <a
                href="https://thomasjbutler.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Globe className="size-4" />
                <span>Portfolio</span>
              </a>
            </div>
          </div>

          {/* Categories column */}
          <div>
            <h4 className="text-sm font-medium font-display text-foreground">
              Categories
            </h4>
            <ul className="mt-3 space-y-2">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-sm font-medium font-display text-foreground">
              Resources
            </h4>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h4 className="text-sm font-medium font-display text-foreground">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/ThomasJButler/css-showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  View on GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://thomasjbutler.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="my-8 opacity-60" />
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tom Butler. Crafted with passion
            and CSS.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with Next.js, Tailwind CSS &amp; ShadCN UI
          </p>
        </div>
      </div>
    </footer>
  )
}
