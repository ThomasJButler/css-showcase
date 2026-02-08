import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { BrowserSupport, type BrowserSupportEntry } from "@/components/browser-support"

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
  browsers?: BrowserSupportEntry[]
  accentColor?: string
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  title,
  subtitle,
  badge,
  browsers,
  accentColor,
  className,
  children,
}: PageHeroProps) {
  const orbColor = accentColor ?? "var(--primary)"

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)]",
        className
      )}
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--primary)]/10 dark:from-[var(--primary)]/10 dark:via-[var(--background)] dark:to-[var(--primary)]/5" />

      {/* Decorative blurred orbs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-3xl"
        style={{ background: `color-mix(in oklch, ${orbColor} 10%, transparent)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full blur-3xl"
        style={{ background: `color-mix(in oklch, ${orbColor} 6%, transparent)` }}
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative px-6 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <Badge
              variant="outline"
              className="mb-4 border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] dark:border-[var(--primary)]/40 dark:bg-[var(--primary)]/15 dark:text-[var(--primary)] font-mono text-xs tracking-wide"
            >
              {badge}
            </Badge>
          )}

          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] md:mt-4 md:text-lg">
              {subtitle}
            </p>
          )}

          {browsers && browsers.length > 0 && (
            <div className="mt-6">
              <BrowserSupport browsers={browsers} />
            </div>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}
