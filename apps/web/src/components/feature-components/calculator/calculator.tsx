'use client'

import { CalculatorKeypad } from './components/keypad/calculator-keypad'
import { OperationKeypad } from './components/keypad/operation-keypad'
import { CalculatorVisor } from './components/visor/calculator-visor'
import { OperationVisor } from './components/visor/operation-visor'
import { TemperatureVisor } from './components/visor/temperature-visor'
import { UseCalculator } from './hooks/use-calculator'
import { useOperationCalculator } from './hooks/use-operation-calculator'

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

  console.log(`getHistory`, getHistory())

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
      <CalculatorKeypad>
        <OperationKeypad
          onClickNumberKeys={updateValues}
          onDeleteDigit={deleteDigit}
          onClickOperator={updateOperator}
          mode={mode}
        />
      </CalculatorKeypad>
    </div>
  )
}
