'use client'

import { Dispatch, SetStateAction } from 'react'
import { CalculatorKeypad } from '../../components/keypad/calculator-keypad'
import { OperationKeypad } from '../../components/keypad/operation-keypad'
import { CalculatorVisor } from '../../components/visor/calculator-visor'
import { OperationVisor } from '../../components/visor/operation-visor'
import { useOperationCalculator } from './hooks/use-operation-calculator'

type Props = {
  isDarkMode: boolean
  isLocal: boolean
  mode: 'temperature' | 'operation'
  toggleDakMode: () => void
  onToggleLocal: () => void
  onToggleMode: () => void
}

export function OperationCalculator({
  mode,
  onToggleMode,
  toggleDakMode,
  isDarkMode,
  onToggleLocal,
  isLocal,
}: Props) {
  const {
    getHistory,
    updateValues,
    getMainLineVisor,
    deleteDigit,
    updateOperator,
    calculateResult,
    onClear,
    isLoading,
  } = useOperationCalculator({ isLocal })

  return (
    <div className="w-full h-full">
      <CalculatorVisor>
        <OperationVisor
          value={getMainLineVisor()}
          history={getHistory()}
        />
      </CalculatorVisor>
      <CalculatorKeypad>
        <OperationKeypad
          onClear={onClear}
          onClickNumberKeys={updateValues}
          onDeleteDigit={deleteDigit}
          onClickOperator={updateOperator}
          onClickResult={calculateResult}
          mode={mode}
          onToggleMode={onToggleMode}
          toggleDakMode={toggleDakMode}
          isDarkMode={isDarkMode}
          onToggleLocal={onToggleLocal}
          isLocal={isLocal}
          isLoading={isLoading}
        />
      </CalculatorKeypad>
    </div>
  )
}
