'use client'

import { useRef, useEffect } from 'react'

interface MetallicTextProps {
  children: React.ReactNode
  className?: string
}

export default function MetallicText({ children, className = '' }: MetallicTextProps) {
  return (
    <span className={`metallic-text ${className}`}>
      {children}
    </span>
  )
}