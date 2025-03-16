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
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  setIsLocal: Dispatch<SetStateAction<boolean>>
  setMode: Dispatch<SetStateAction<'temperature' | 'operation'>>
}

export function OperationCalculator({ mode }: Props) {
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
        />
      </CalculatorKeypad>
    </div>
  )
}
