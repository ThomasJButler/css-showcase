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
            "relative rounded-lg border border-dashed border-[var(--border)] p-4",
            "bg-[var(--surface)] dark:bg-[var(--surface)]",
            "overflow-x-auto"
          )}
        >
          {/* Dotted background pattern for demo area */}
          <div
            className="pointer-events-none absolute inset-0 rounded-lg opacity-[0.03] dark:opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 0.5px, transparent 0.5px)",
              backgroundSize: "16px 16px",
            }}
          />
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
