'use client'

import { UseCalculator } from './use-calculator'
import { OperationCalculator } from '../operation-calculator'
import { TemperatureCalculator } from '../temperature-calculator'

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
    <div className="w-full dark:bg-gray-900 rounded-t-xl">
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
