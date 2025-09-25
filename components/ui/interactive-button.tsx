"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"

interface InteractiveButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function InteractiveButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: InteractiveButtonProps) {
  const glowRef = React.useRef<HTMLSpanElement>(null)

  const handleMouseMove = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      if (glowRef.current) {
        glowRef.current.style.setProperty("--x", `${x}px`)
        glowRef.current.style.setProperty("--y", `${y}px`)
      }
      onMouseMove?.(event as React.MouseEvent<HTMLButtonElement>)
    },
    [onMouseMove],
  )

  const handleMouseLeave = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty("--x", "50%")
        glowRef.current.style.setProperty("--y", "50%")
      }
      onMouseLeave?.(event as React.MouseEvent<HTMLButtonElement>)
    },
    [onMouseLeave],
  )

  const mergedClassName = cn(
    "relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl",
    buttonVariants({ variant, size }),
    className,
  )

  const glow = (
    <span
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(160px circle at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.35), transparent 70%)",
      }}
    />
  )

  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement

    return React.cloneElement(child, {
      ...props,
      "data-slot": "interactive-button",
      className: cn(mergedClassName, child.props.className),
      onMouseMove: (event: React.MouseEvent<HTMLElement>) => {
        handleMouseMove(event)
        child.props.onMouseMove?.(event)
      },
      onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
        handleMouseLeave(event)
        child.props.onMouseLeave?.(event)
      },
      children: (
        <>
          {glow}
          <span className="relative z-10 inline-flex items-center gap-2">
            {child.props.children}
          </span>
        </>
      ),
    })
  }

  return (
    <button
      data-slot="interactive-button"
      className={mergedClassName}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {glow}
      {content}
    </button>
  )
}
