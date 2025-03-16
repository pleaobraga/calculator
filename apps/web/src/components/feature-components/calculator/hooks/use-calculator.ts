'use client'

import { useState } from 'react'

export function UseCalculator() {
  const [mode, setMode] = useState<'temperature' | 'operation'>('operation')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLocal, setIsLocal] = useState(true)

  return {
    mode,
    setMode,
    isDarkMode,
    setIsDarkMode,
    isLocal,
    setIsLocal,
  }
}
