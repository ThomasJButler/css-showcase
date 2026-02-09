import { cn } from "@/lib/utils"

interface DemoGridProps {
  columns?: 1 | 2 | 3
  className?: string
  children: React.ReactNode
}

export function DemoGrid({
  columns = 1,
  className,
  children,
}: DemoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 lg:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}
