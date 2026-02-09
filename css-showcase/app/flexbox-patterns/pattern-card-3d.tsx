"use client"

import { useRef, useState, type ReactNode } from "react"

export function PatternCard3D({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setTransform(`perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`)
  }

  function handleMouseLeave() {
    setTransform("")
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: transform || "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        transition: transform ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}
