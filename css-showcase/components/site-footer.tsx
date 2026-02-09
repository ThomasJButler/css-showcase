import Link from "next/link"
import { WebBrowser } from "@/components/icons/streamline-icons"
import { Github } from "lucide-react"
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
    <footer className="mt-auto relative bg-muted/30">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Decorative forest silhouette */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          clipPath:
            "polygon(0% 100%, 2% 85%, 5% 90%, 8% 70%, 12% 80%, 15% 60%, 18% 75%, 22% 55%, 25% 65%, 28% 45%, 32% 60%, 35% 40%, 38% 55%, 42% 35%, 45% 50%, 48% 30%, 52% 45%, 55% 25%, 58% 40%, 62% 30%, 65% 45%, 68% 35%, 72% 50%, 75% 40%, 78% 55%, 82% 45%, 85% 60%, 88% 50%, 92% 65%, 95% 55%, 98% 70%, 100% 100%)",
          background: "var(--primary)",
        }}
      />

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
                <WebBrowser className="size-4" />
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
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground/60">Built with</span>
            {["Next.js", "Tailwind CSS", "ShadCN UI"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/40 bg-muted/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
