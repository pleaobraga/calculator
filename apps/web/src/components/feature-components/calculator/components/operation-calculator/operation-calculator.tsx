'use client'

import { Dispatch, SetStateAction } from 'react'
import { CalculatorKeypad } from '../../components/keypad/calculator-keypad'
import { OperationKeypad } from '../../components/keypad/operation-keypad'
import { CalculatorVisor } from '../../components/visor/calculator-visor'
import { OperationVisor } from '../../components/visor/operation-visor'
import { useOperationCalculator } from './use-operation-calculator'

type Props = {
  isDarkMode: boolean
  isLocal: boolean
  mode: 'temperature' | 'operation'
  toggleDakMode: () => void
  setIsLocal: Dispatch<SetStateAction<boolean>>
  onToggleMode: () => void
}

export function OperationCalculator({
  mode,
  onToggleMode,
  toggleDakMode,
  isDarkMode,
}: Props) {
  const {
    getHistory,
    updateValues,
    getMainLineVisor,
    deleteDigit,
    updateOperator,
    calculateResult,
    onClear,
  } = useOperationCalculator()

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
        />
      </CalculatorKeypad>
    </div>
  )
}
