import { twMerge } from 'tailwind-merge'

import { ActionsDigitsKeypad } from '../actions-digits-keypad'
import { NumberDigitsKeypad } from '../number-digits-keypad'
import { OperationDigitsKeypad } from '../operation-digits-keypad'
import { Operator } from '@/types/index'

type Props = {
  onClickNumberKeys: (digit: string) => void
  onDeleteDigit: () => void
  onClickOperator: (operator: Operator) => void
  onClickResult: () => void
  onClear: () => void
  onToggleMode: () => void
  toggleDakMode: () => void
  mode: 'temperature' | 'operation'
  isDarkMode: boolean
}

export function OperationKeypad({
  onClickNumberKeys,
  onDeleteDigit,
  onClickOperator,
  onClickResult,
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
      <div className="row-start-1 row-end-5 col-start-3 col-end-3">
        <OperationDigitsKeypad
          onClickOperator={onClickOperator}
          onClickResult={onClickResult}
        />
      </div>
    </div>
  )
}
