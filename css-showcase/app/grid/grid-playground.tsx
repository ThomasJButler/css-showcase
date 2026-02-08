"use client"

import { useState, useCallback } from "react"
import { CodeBlock } from "@/components/code-block"
import { Slider } from "@/components/ui/slider"

type AutoFlow = "row" | "column" | "dense" | "row dense" | "column dense"
type JustifyItems = "start" | "center" | "end" | "stretch"
type AlignItems = "start" | "center" | "end" | "stretch"

interface GridState {
  columns: string
  rows: string
  gap: number
  autoFlow: AutoFlow
  justifyItems: JustifyItems
  alignItems: AlignItems
}

export function GridPlayground() {
  const [grid, setGrid] = useState<GridState>({
    columns: "repeat(3, 1fr)",
    rows: "auto",
    gap: 12,
    autoFlow: "row",
    justifyItems: "stretch",
    alignItems: "stretch",
  })

  const [itemCount, setItemCount] = useState(6)
  const [selectedItem, setSelectedItem] = useState(0)
  const [colSpan, setColSpan] = useState(1)
  const [rowSpan, setRowSpan] = useState(1)

  const updateGrid = useCallback(
    <K extends keyof GridState>(key: K, value: GridState[K]) => {
      setGrid((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const hasItemOverrides = colSpan > 1 || rowSpan > 1

  const generatedCSS = `.grid-container {
    display: grid;
    grid-template-columns: ${grid.columns};${grid.rows !== "auto" ? `\n    grid-template-rows: ${grid.rows};` : ""}
    gap: ${grid.gap}px;${grid.autoFlow !== "row" ? `\n    grid-auto-flow: ${grid.autoFlow};` : ""}${grid.justifyItems !== "stretch" ? `\n    justify-items: ${grid.justifyItems};` : ""}${grid.alignItems !== "stretch" ? `\n    align-items: ${grid.alignItems};` : ""}
}${
    hasItemOverrides
      ? `

.item-${selectedItem + 1} {${colSpan > 1 ? `\n    grid-column: span ${colSpan};` : ""}${rowSpan > 1 ? `\n    grid-row: span ${rowSpan};` : ""}
}`
      : ""
  }`

  return (
    <div className="mt-2 grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Controls Panel */}
      <div className="space-y-5 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 lg:max-h-[620px] lg:overflow-y-auto">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[var(--primary)]">
            Grid Container
          </h3>

          <div className="space-y-3">
            <ControlSelect
              label="grid-template-columns"
              value={grid.columns}
              options={[
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
                "repeat(auto-fit, minmax(100px, 1fr))",
                "1fr 2fr 1fr",
                "200px 1fr 200px",
                "repeat(2, 1fr)",
              ]}
              onChange={(v) => updateGrid("columns", v)}
            />
            <ControlSelect
              label="grid-template-rows"
              value={grid.rows}
              options={[
                "auto",
                "repeat(3, 100px)",
                "100px auto 100px",
                "repeat(auto-fill, minmax(80px, 1fr))",
              ]}
              onChange={(v) => updateGrid("rows", v)}
            />
            <div>
              <label className="mb-1 flex items-center justify-between font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[var(--muted-foreground)]">
                <span>gap</span>
                <span className="rounded bg-[var(--muted)] px-2 py-0.5 text-center">
                  {grid.gap}px
                </span>
              </label>
              <Slider
                value={[grid.gap]}
                onValueChange={([v]) => updateGrid("gap", v)}
                min={0}
                max={40}
                step={1}
              />
            </div>
            <ControlSelect
              label="grid-auto-flow"
              value={grid.autoFlow}
              options={["row", "column", "dense", "row dense", "column dense"]}
              onChange={(v) => updateGrid("autoFlow", v as AutoFlow)}
            />
            <ControlSelect
              label="justify-items"
              value={grid.justifyItems}
              options={["stretch", "start", "center", "end"]}
              onChange={(v) => updateGrid("justifyItems", v as JustifyItems)}
            />
            <ControlSelect
              label="align-items"
              value={grid.alignItems}
              options={["stretch", "start", "center", "end"]}
              onChange={(v) => updateGrid("alignItems", v as AlignItems)}
            />
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-4">
          <h3 className="mb-3 text-sm font-semibold text-[var(--primary)]">
            Item Properties
          </h3>

          <div className="space-y-3">
            <div>
              <label className="mb-1 flex items-center justify-between font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[var(--muted-foreground)]">
                <span>Items</span>
                <span className="rounded bg-[var(--muted)] px-2 py-0.5 text-center">
                  {itemCount}
                </span>
              </label>
              <Slider
                value={[itemCount]}
                onValueChange={([v]) => {
                  setItemCount(v)
                  if (selectedItem >= v) setSelectedItem(v - 1)
                }}
                min={1}
                max={12}
                step={1}
              />
            </div>
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
            <div>
              <label className="mb-1 flex items-center justify-between font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[var(--muted-foreground)]">
                <span>grid-column: span</span>
                <span className="rounded bg-[var(--muted)] px-2 py-0.5 text-center">
                  {colSpan}
                </span>
              </label>
              <Slider
                value={[colSpan]}
                onValueChange={([v]) => setColSpan(v)}
                min={1}
                max={4}
                step={1}
              />
            </div>
            <div>
              <label className="mb-1 flex items-center justify-between font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-[var(--muted-foreground)]">
                <span>grid-row: span</span>
                <span className="rounded bg-[var(--muted)] px-2 py-0.5 text-center">
                  {rowSpan}
                </span>
              </label>
              <Slider
                value={[rowSpan]}
                onValueChange={([v]) => setRowSpan(v)}
                min={1}
                max={4}
                step={1}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Demo Area */}
      <div className="flex flex-col gap-4">
        <div
          className="min-h-[350px] rounded-lg border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-4 transition-all lg:min-h-[400px]"
          style={{
            display: "grid",
            gridTemplateColumns: grid.columns,
            gridTemplateRows: grid.rows !== "auto" ? grid.rows : undefined,
            gap: `${grid.gap}px`,
            gridAutoFlow: grid.autoFlow,
            justifyItems: grid.justifyItems,
            alignItems: grid.alignItems,
          }}
        >
          {Array.from({ length: itemCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedItem(i)}
              className="flex min-h-[60px] cursor-pointer items-center justify-center rounded-md px-4 py-3 text-center font-semibold text-[var(--primary-foreground)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
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
                      gridColumn: colSpan > 1 ? `span ${colSpan}` : undefined,
                      gridRow: rowSpan > 1 ? `span ${rowSpan}` : undefined,
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
