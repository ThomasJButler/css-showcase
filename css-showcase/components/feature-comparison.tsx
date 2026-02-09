import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/code-block"

interface FeatureComparisonProps {
  oldWay: {
    label?: string
    code: string
    language?: string
  }
  newWay: {
    label?: string
    code: string
    language?: string
  }
  className?: string
}

export function FeatureComparison({
  oldWay,
  newWay,
  className,
}: FeatureComparisonProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-2",
        className
      )}
    >
      {/* Old Way */}
      <div className="space-y-2">
        <Badge
          variant="outline"
          className="border-red-500/30 bg-red-500/5 text-red-700 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-400 font-mono text-xs"
        >
          {oldWay.label ?? "Old Way"}
        </Badge>
        <CodeBlock
          code={oldWay.code}
          language={oldWay.language ?? "css"}
          className="border-red-500/20 dark:border-red-500/15"
        />
      </div>

      {/* New Way */}
      <div className="space-y-2">
        <Badge
          variant="outline"
          className="border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-400 font-mono text-xs"
        >
          {newWay.label ?? "New Way"}
        </Badge>
        <CodeBlock
          code={newWay.code}
          language={newWay.language ?? "css"}
          className="border-emerald-500/20 dark:border-emerald-500/15"
        />
      </div>
    </div>
  )
}
