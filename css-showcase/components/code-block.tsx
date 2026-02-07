"use client"

import { useState, useRef, useEffect } from "react"
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  collapsible?: boolean
  defaultOpen?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = "css",
  title,
  collapsible = false,
  defaultOpen = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const codeRef = useRef<HTMLPreElement>(null)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
    }
  }

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const header = (
    <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]">
      <div className="flex items-center gap-2">
        {/* Terminal dots */}
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400/80 dark:bg-red-500/60" />
          <span className="size-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/60" />
          <span className="size-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/60" />
        </div>
        {title && (
          <span className="ml-2 text-xs font-medium text-[var(--text-muted)] font-mono uppercase tracking-wider">
            {title}
          </span>
        )}
        {!title && language && (
          <span className="ml-2 text-xs font-medium text-[var(--text-muted)] font-mono uppercase tracking-wider">
            {language}
          </span>
        )}
      </div>
      <div className="flex items-center gap-1">
        {collapsible && (
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-7 text-[var(--text-muted)] hover:text-foreground"
            >
              {isOpen ? (
                <ChevronUp className="size-3.5" />
              ) : (
                <ChevronDown className="size-3.5" />
              )}
              <span className="sr-only">
                {isOpen ? "Collapse code" : "Expand code"}
              </span>
            </Button>
          </CollapsibleTrigger>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="size-7 text-[var(--text-muted)] hover:text-foreground"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="size-3.5 text-emerald-500" />
          ) : (
            <Copy className="size-3.5" />
          )}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
    </div>
  )

  const codeContent = (
    <pre
      ref={codeRef}
      className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono"
    >
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )

  const wrapper = cn(
    "group relative rounded-lg border border-[var(--border)] overflow-hidden",
    "bg-[var(--surface-alt)] dark:bg-[#1a1b26]",
    "text-[var(--text-primary)] dark:text-[#c0caf5]",
    "shadow-xs",
    className
  )

  if (collapsible) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className={wrapper}>
        {header}
        <CollapsibleContent>{codeContent}</CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <div className={wrapper}>
      {header}
      {codeContent}
    </div>
  )
}
