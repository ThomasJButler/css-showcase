import { cn } from "@/lib/utils"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { CodeBlock } from "@/components/code-block"

interface DemoCardProps {
  title: string
  description?: string
  code?: string
  language?: string
  codeTitle?: string
  collapsibleCode?: boolean
  codeDefaultOpen?: boolean
  className?: string
  children: React.ReactNode
}

export function DemoCard({
  title,
  description,
  code,
  language = "css",
  codeTitle,
  collapsibleCode = true,
  codeDefaultOpen = false,
  className,
  children,
}: DemoCardProps) {
  return (
    <Card className={cn("overflow-hidden animate-on-scroll-card", className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Live demo area */}
        <div
          className={cn(
            "relative rounded-lg border border-[var(--border)]/60 p-4",
            "bg-[var(--surface-alt)] dark:bg-[oklch(0.20_0.025_150)]",
            "shadow-[inset_0_2px_4px_0_oklch(0.30_0.02_55/0.05)] dark:shadow-[inset_0_2px_4px_0_oklch(0.10_0.02_155/0.15)]",
            "border-l-[3px] border-l-[var(--primary)]/15",
            "overflow-x-auto"
          )}
        >
          {/* Top-edge gradient highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent" />
          <div className="relative">{children}</div>
        </div>

        {/* Code block */}
        {code && (
          <CodeBlock
            code={code}
            language={language}
            title={codeTitle}
            collapsible={collapsibleCode}
            defaultOpen={codeDefaultOpen}
          />
        )}
      </CardContent>
    </Card>
  )
}
