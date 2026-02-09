"use client"

import { useState, useCallback } from "react"
import { CodeBlock } from "@/components/code-block"

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"
type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"
type JustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
type AlignItems = "stretch" | "flex-start" | "center" | "flex-end" | "baseline"
type AlignSelf = "auto" | "flex-start" | "center" | "flex-end" | "stretch"

interface ContainerProps {
  flexDirection: FlexDirection
  flexWrap: FlexWrap
  justifyContent: JustifyContent
  alignItems: AlignItems
  gap: number
}

interface ItemProps {
  flexGrow: number
  flexShrink: number
  alignSelf: AlignSelf
}

export function FlexboxPlayground() {
  const [container, setContainer] = useState<ContainerProps>({
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 10,
  })

  const [itemCount, setItemCount] = useState(5)
  const [selectedItem, setSelectedItem] = useState(0)
  const [itemProps, setItemProps] = useState<ItemProps>({
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: "auto",
  })

  const updateContainer = useCallback(
    <K extends keyof ContainerProps>(key: K, value: ContainerProps[K]) => {
      setContainer((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const generatedCSS = `.container {
    display: flex;
    flex-direction: ${container.flexDirection};
    flex-wrap: ${container.flexWrap};
    justify-content: ${container.justifyContent};
    align-items: ${container.alignItems};
    gap: ${container.gap}px;
}${
    itemProps.flexGrow !== 0 ||
    itemProps.flexShrink !== 1 ||
    itemProps.alignSelf !== "auto"
      ? `

.item-${selectedItem + 1} {${itemProps.flexGrow !== 0 ? `\n    flex-grow: ${itemProps.flexGrow};` : ""}${itemProps.flexShrink !== 1 ? `\n    flex-shrink: ${itemProps.flexShrink};` : ""}${itemProps.alignSelf !== "auto" ? `\n    align-self: ${itemProps.alignSelf};` : ""}
}`
      : ""
  }`

  return (
    <div className="mt-2 grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Controls Panel */}
      <div className="space-y-5 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 lg:max-h-[620px] lg:overflow-y-auto">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[var(--primary)]">
            Container Properties
          </h3>

          <div className="space-y-3">
            <ControlSelect
              label="flex-direction"
              value={container.flexDirection}
              options={["row", "row-reverse", "column", "column-reverse"]}
              onChange={(v) => updateContainer("flexDirection", v as FlexDirection)}
            />
            <ControlSelect
              label="flex-wrap"
              value={container.flexWrap}
              options={["nowrap", "wrap", "wrap-reverse"]}
              onChange={(v) => updateContainer("flexWrap", v as FlexWrap)}
            />
            <ControlSelect
              label="justify-content"
              value={container.justifyContent}
              options={[
                "flex-start",
                "center",
                "flex-end",
                "space-between",
                "space-around",
                "space-evenly",
              ]}
              onChange={(v) =>
                updateContainer("justifyContent", v as JustifyContent)
              }
            />
            <ControlSelect
              label="align-items"
              value={container.alignItems}
              options={["stretch", "flex-start", "center", "flex-end", "baseline"]}
              onChange={(v) => updateContainer("alignItems", v as AlignItems)}
            />
            <ControlRange
              label="gap"
              value={container.gap}
              min={0}
              max={40}
              suffix="px"
              onChange={(v) => updateContainer("gap", v)}
            />
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-4">
          <h3 className="mb-3 text-sm font-semibold text-[var(--primary)]">
            Item Properties
          </h3>

          <div className="space-y-3">
            <ControlRange
              label="Number of items"
              value={itemCount}
              min={1}
              max={10}
              onChange={(v) => {
                setItemCount(v)
                if (selectedItem >= v) setSelectedItem(v - 1)
              }}
            />
            <ControlSelect
              label="Selected item"
              value={String(selectedItem)}
              options={Array.from({ length: itemCount }, (_, i) => String(i))}
              displayOptions={Array.from(
                { length: itemCount },
                (_, i) => `Item ${i + 1}`
              )}
              onChange={(v) => setSelectedItem(Number(v))}
            />
            <ControlRange
              label="flex-grow"
              value={itemProps.flexGrow}
              min={0}
              max={5}
              onChange={(v) => setItemProps((p) => ({ ...p, flexGrow: v }))}
            />
            <ControlRange
              label="flex-shrink"
              value={itemProps.flexShrink}
              min={0}
              max={5}
              onChange={(v) => setItemProps((p) => ({ ...p, flexShrink: v }))}
            />
            <ControlSelect
              label="align-self"
              value={itemProps.alignSelf}
              options={["auto", "flex-start", "center", "flex-end", "stretch"]}
              onChange={(v) =>
                setItemProps((p) => ({ ...p, alignSelf: v as AlignSelf }))
              }
            />
          </div>
        </div>
      </div>

      {/* Demo Area */}
      <div className="flex flex-col gap-4">
        <div
          className="min-h-[350px] rounded-lg border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-4 transition-all lg:min-h-[400px]"
          style={{
            display: "flex",
            flexDirection: container.flexDirection,
            flexWrap: container.flexWrap,
            justifyContent: container.justifyContent,
            alignItems: container.alignItems,
            gap: `${container.gap}px`,
          }}
        >
          {Array.from({ length: itemCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedItem(i)}
              className="cursor-pointer rounded-md px-5 py-3 text-center font-semibold text-[var(--primary-foreground)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background:
                  i === selectedItem
                    ? "var(--secondary)"
                    : "var(--primary)",
                boxShadow:
                  i === selectedItem
                    ? "0 0 0 3px oklch(from var(--secondary) l c h / 0.3)"
                    : "none",
                ...(i === selectedItem
                  ? {
                      flexGrow: itemProps.flexGrow,
                      flexShrink: itemProps.flexShrink,
                      alignSelf:
                        itemProps.alignSelf === "auto"
                          ? undefined
                          : itemProps.alignSelf,
                    }
                  : {}),
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <CodeBlock code={generatedCSS} language="css" title="Generated CSS" />
      </div>
    </div>
  )
}

/* ── Control sub-components ── */

function ControlSelect({
  label,
  value,
  options,
  displayOptions,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  displayOptions?: string[]
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label className="mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[var(--muted-foreground)]">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--foreground)] transition-colors focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
      >
        {options.map((opt, i) => (
          <option key={opt} value={opt}>
            {displayOptions ? displayOptions[i] : opt}
          </option>
        ))}
      </select>
    </div>
  )
}

function ControlRange({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  suffix?: string
  onChange: (value: number) => void
}) {
  return (
    <div>
      <label className="mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[var(--muted-foreground)]">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-[var(--muted)] accent-[var(--primary)]"
        />
        <span className="inline-block min-w-[3rem] rounded bg-[var(--muted)] px-2 py-0.5 text-center font-[family-name:var(--font-jetbrains-mono)] text-xs">
          {value}
          {suffix ?? ""}
        </span>
      </div>
    </div>
  )
}
