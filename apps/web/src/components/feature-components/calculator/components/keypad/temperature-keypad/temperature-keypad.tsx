import { twMerge } from 'tailwind-merge'

import { ActionsDigitsKeypad } from '../actions-digits-keypad'
import { NumberDigitsKeypad } from '../number-digits-keypad'

type Props = {
  onClickNumberKeys: (digit: string) => void
  onDeleteDigit: () => void
  onClear: () => void
  mode: 'temperature' | 'operation'
  onToggleMode: () => void
  toggleDakMode: () => void
  isDarkMode: boolean
}

export function TemperatureKeypad({
  onClickNumberKeys,
  onDeleteDigit,
  onClear,
  onToggleMode,
  toggleDakMode,
  isDarkMode,
  mode = 'operation',
}: Props) {
  return (
    <div className={twMerge('w-full h-full grid gap-4')}>
      <div className="row-start-1 row-end-1 col-start-1 col-end-3">
        <ActionsDigitsKeypad
          mode={mode}
          onToggleMode={onToggleMode}
          toggleDakMode={toggleDakMode}
          isDarkMode={isDarkMode}
        />
      </div>
      <div className="row-start-2 row-end-5 col-start-1 col-end-3">
        <NumberDigitsKeypad
          onClear={onClear}
          onClickNumberKeys={onClickNumberKeys}
          onDeleteDigit={onDeleteDigit}
        />
      </div>
    </div>
  )
}
