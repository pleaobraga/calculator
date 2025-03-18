'use client'


import { CalculatorKeypad } from '../calculator/components/keypad/calculator-keypad'
import { CalculatorVisor } from '../calculator/components/visor/calculator-visor'
import { TemperatureKeypad } from './components/temperature-keypad'
import { TemperatureVisor } from './components/temperature-visor'
import { useTemperatureCalculator } from './hooks/use-temperature-calculator'

type Props = {
  isDarkMode: boolean
  isLocal: boolean
  mode: 'temperature' | 'operation'
  onToggleLocal: () => void
  onToggleMode: () => void
  toggleDakMode: () => void
}

export function TemperatureCalculator({
  mode,
  onToggleMode,
  toggleDakMode,
  onToggleLocal,
  isDarkMode,
  isLocal,
}: Props) {
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
    isFetching,
  } = useTemperatureCalculator({ isLocal })

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
          isFetching={isFetching}
        />
      </CalculatorVisor>
      <CalculatorKeypad>
        <TemperatureKeypad
          onClear={onClear}
          onClickNumberKeys={updateValue}
          onDeleteDigit={deleteDigit}
          mode={mode}
          onToggleMode={onToggleMode}
          toggleDakMode={toggleDakMode}
          isDarkMode={isDarkMode}
          isLocal={isLocal}
          onToggleLocal={onToggleLocal}
        />
      </CalculatorKeypad>
    </div>
  )
}
