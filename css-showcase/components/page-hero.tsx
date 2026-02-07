import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export function PageHero({
  title,
  subtitle,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)]",
        "bg-gradient-to-br from-[var(--background)] via-[var(--surface)] to-[var(--surface-alt)]",
        "dark:from-[var(--background)] dark:via-[var(--surface)] dark:to-[var(--background)]",
        className
      )}
    >
      {/* Subtle decorative grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative px-6 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] md:mt-4 md:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}
