'use client'

import { Dispatch, SetStateAction } from 'react'
import { CalculatorKeypad } from '../keypad/calculator-keypad'
import { CalculatorVisor } from '../visor/calculator-visor'
import { TemperatureVisor } from '../visor/temperature-visor'
import { TemperatureKeypad } from '../keypad/temperature-keypad'
import { useTemperatureCalculator } from './use-temperature-calculator'

type Props = {
  isDarkMode: boolean
  isLocal: boolean
  mode: 'temperature' | 'operation'
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  setIsLocal: Dispatch<SetStateAction<boolean>>
  onToggleMode: () => void
}

export function TemperatureCalculator({ mode, onToggleMode }: Props) {
  const {
    converted,
    onChangeFrom,
    onChangeTo,
    value,
    onClear,
    deleteDigit,
    updateValue,
    from,
    to,
  } = useTemperatureCalculator()

  return (
    <div className="w-full h-full">
      <CalculatorVisor>
        <TemperatureVisor
          onChangeFrom={onChangeFrom}
          onChangeTo={onChangeTo}
          value={value}
          response={converted}
          defaultValueFrom={from}
          defaultValueTo={to}
        />
      </CalculatorVisor>
      <CalculatorKeypad>
        <TemperatureKeypad
          onClear={onClear}
          onClickNumberKeys={updateValue}
          onDeleteDigit={deleteDigit}
          mode={mode}
          onToggleMode={onToggleMode}
        />
      </CalculatorKeypad>
    </div>
  )
}
