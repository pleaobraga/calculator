'use client'

import { useState } from 'react'

export function UseCalculator() {
  const [mode, setMode] = useState<'temperature' | 'operation'>('operation')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLocal, setIsLocal] = useState(true)

  function onToggleMode() {
    setMode((state) => {
      return state === 'operation' ? 'temperature' : 'operation'
    })
  }

  return {
    mode,
    onToggleMode,
    isDarkMode,
    setIsDarkMode,
    isLocal,
    setIsLocal,
  }
}
