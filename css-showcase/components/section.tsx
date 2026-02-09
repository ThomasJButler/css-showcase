import { cn } from "@/lib/utils"

interface SectionProps {
  title: string
  intro?: string
  id?: string
  variant?: "default" | "alt"
  className?: string
  children: React.ReactNode
}

export function Section({
  title,
  intro,
  id,
  variant = "default",
  className,
  children,
}: SectionProps) {
  const sectionId =
    id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  return (
    <section
      id={sectionId}
      className={cn(
        "scroll-mt-20 px-6 py-10 md:px-10 md:py-14",
        "animate-on-scroll",
        variant === "alt" && "bg-[var(--surface-alt)]/30",
        className
      )}
    >
      <div className="mb-8">
        <div className="mb-3 h-[3px] w-10 rounded-full bg-primary/60" />
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-2 max-w-3xl text-[var(--text-secondary)] leading-relaxed">
            {intro}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
