'use client'

import { CalculatorKeypad } from './components/calculator-keypad'
import { CalculatorVisor } from './components/visor/calculator-visor'
import { OperationVisor } from './components/visor/operation-visor'
import { TemperatureVisor } from './components/visor/temperature-visor'
import { UseCalculator } from './use-calculator'
import { useOperationCalculator } from './use-operation-calculator'

export function Calculator() {
  const { isDarkMode, isLocal, mode, setIsDarkMode, setIsLocal, setMode } =
    UseCalculator()
  const {
    getHistory,
    updateValues,
    getMainLineVisor,
    deleteDigit,
    updateOperator,
  } = useOperationCalculator()

  return (
    <div className="w-full h-full">
      <CalculatorVisor>
        {mode === 'operation' && (
          <OperationVisor
            value={getMainLineVisor()}
            history={getHistory()}
          />
        )}
      </CalculatorVisor>
      <CalculatorKeypad
        onClickNumberKeys={updateValues}
        onDeleteDigit={deleteDigit}
        onClickOperator={updateOperator}
      />
    </div>
  )
}
