import { twMerge } from 'tailwind-merge'

import { ActionsDigitsKeypad } from '@/components/feature-components/calculator/components/keypad/actions-digits-keypad'
import { NumberDigitsKeypad } from '@/components/feature-components/calculator/components/keypad/number-digits-keypad'

type Props = {
  onClickNumberKeys: (digit: string) => void
  onDeleteDigit: () => void
  onClear: () => void
  mode: 'temperature' | 'operation'
  onToggleMode: () => void
  toggleDakMode: () => void
  onToggleLocal: () => void
  isDarkMode: boolean
  isLocal: boolean
}

export function TemperatureKeypad({
  onClickNumberKeys,
  onDeleteDigit,
  onClear,
  onToggleMode,
  toggleDakMode,
  onToggleLocal,
  isDarkMode,
  isLocal,
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
          onToggleLocal={onToggleLocal}
          isLocal={isLocal}
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
