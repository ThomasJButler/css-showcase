import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface BrowserSupportEntry {
  browser: string
  version: string
  supported?: boolean
}

interface BrowserSupportProps {
  browsers: BrowserSupportEntry[]
  className?: string
}

const browserIcons: Record<string, string> = {
  chrome: "Ch",
  firefox: "Ff",
  safari: "Sa",
  edge: "Ed",
}

export function BrowserSupport({ browsers, className }: BrowserSupportProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {browsers.map(({ browser, version, supported = true }) => (
        <Badge
          key={browser}
          variant="outline"
          className={cn(
            "gap-1.5 font-mono text-xs py-1 px-2.5",
            supported
              ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-muted)]"
          )}
        >
          <span className="inline-flex size-4 items-center justify-center rounded-sm bg-[var(--surface-variant)] text-[9px] font-bold leading-none dark:bg-[var(--surface-alt)]">
            {browserIcons[browser.toLowerCase()] ?? browser.slice(0, 2)}
          </span>
          <span>{browser}</span>
          <span className="text-[10px] opacity-70">{version}</span>
        </Badge>
      ))}
    </div>
  )
}
