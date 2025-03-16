'use client'

import { UseCalculator } from './hooks/use-calculator'
import { OperationCalculator } from './components/operation-calculator'

export function Calculator() {
  const { isDarkMode, isLocal, mode, setIsDarkMode, setIsLocal, setMode } =
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
          setMode={setMode}
        />
      )}
    </div>
  )
}
