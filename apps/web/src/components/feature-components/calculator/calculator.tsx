'use client'

import { UseCalculator } from './hooks/use-calculator'
import { OperationCalculator } from './components/operation-calculator'
import { TemperatureCalculator } from './components/temperature-calculator'

export function Calculator() {
  const { isDarkMode, isLocal, mode, setIsDarkMode, setIsLocal, onToggleMode } =
    UseCalculator()

  return (
    <div className="w-full h-full">
      {mode === 'operation' && (
        <OperationCalculator
          isDarkMode={isDarkMode}
          isLocal={isLocal}
          mode={mode}
          setIsDarkMode={setIsDarkMode}
          setIsLocal={setIsLocal}
          onToggleMode={onToggleMode}
        />
      )}
      {mode === 'temperature' && (
        <TemperatureCalculator
          isDarkMode={isDarkMode}
          isLocal={isLocal}
          mode={mode}
          setIsDarkMode={setIsDarkMode}
          setIsLocal={setIsLocal}
          onToggleMode={onToggleMode}
        />
      )}
    </div>
  )
}
