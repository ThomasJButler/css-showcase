import { cn } from "@/lib/utils"

interface SectionProps {
  title: string
  intro?: string
  id?: string
  className?: string
  children: React.ReactNode
}

export function Section({
  title,
  intro,
  id,
  className,
  children,
}: SectionProps) {
  const sectionId =
    id ?? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  return (
    <section
      id={sectionId}
      className={cn("scroll-mt-20 px-6 py-10 md:px-10 md:py-14", className)}
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-2 max-w-2xl text-[var(--text-secondary)] leading-relaxed">
            {intro}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
