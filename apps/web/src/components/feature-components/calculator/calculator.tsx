'use client'

import { UseCalculator } from './use-calculator'
import { OperationCalculator } from './components/operation-calculator'
import { TemperatureCalculator } from './components/temperature-calculator'

export function Calculator() {
  const {
    isDarkMode,
    isLocal,
    mode,
    toggleDakMode,
    onToggleLocal,
    onToggleMode,
  } = UseCalculator()

  return (
    <div className="w-full dark:bg-gray-900">
      {mode === 'operation' && (
        <OperationCalculator
          isDarkMode={isDarkMode}
          isLocal={isLocal}
          mode={mode}
          toggleDakMode={toggleDakMode}
          onToggleLocal={onToggleLocal}
          onToggleMode={onToggleMode}
        />
      )}
      {mode === 'temperature' && (
        <TemperatureCalculator
          isDarkMode={isDarkMode}
          isLocal={isLocal}
          mode={mode}
          toggleDakMode={toggleDakMode}
          onToggleLocal={onToggleLocal}
          onToggleMode={onToggleMode}
        />
      )}
    </div>
  )
}
