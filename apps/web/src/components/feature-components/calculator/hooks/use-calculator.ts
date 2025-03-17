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

  function toggleDakMode() {
    const html = document.querySelector('html')

    const hasDarkMode = html?.classList.contains('dark')

    html?.classList.toggle('dark')
    setIsDarkMode(!hasDarkMode)
  }

  return {
    mode,
    onToggleMode,
    isDarkMode,
    toggleDakMode,
    isLocal,
    setIsLocal,
  }
}
