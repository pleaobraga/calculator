import { twMerge } from 'tailwind-merge'
import { FaDivide, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'

import { CalculatorButton } from '../button/calculator-button'
import { ThemeChangeButton } from '../button/theme-change-button/theme-change-button'
import { EnvChangeButton } from '../button/env-change-button'
import { EqualButton } from '../button/equal-button'
import { DeleteButton } from '../button/delete-button/delete-button'
import { TemperatureButton } from '../button/temperature-button'

type Props = {
  onClickNumberKeys: (digit: string) => void
  onDeleteDigit: () => void
  onClickOperator: (operator: string) => void
}

export function CalculatorKeypad({
  onClickNumberKeys,
  onDeleteDigit,
  onClickOperator,
}: Props) {
  return (
    <div
      className={twMerge(
        'w-full h-full py-12 px-10 bg-gray-100 grid grid-cols-4 gap-4 rounded-t-4xl'
      )}
    >
      <EnvChangeButton onChangeEnv={() => {}} />
      <ThemeChangeButton />

      <TemperatureButton onClick={() => {}} />

      <CalculatorButton
        content={<FaXmark />}
        onClick={() => onClickOperator('*')}
        color="gray"
      />
      <CalculatorButton
        content="7"
        onClick={() => onClickNumberKeys('7')}
      />
      <CalculatorButton
        content="8"
        onClick={() => onClickNumberKeys('8')}
      />
      <CalculatorButton
        content="9"
        onClick={() => onClickNumberKeys('9')}
      />
      <CalculatorButton
        content={<FaMinus />}
        onClick={() => onClickOperator('-')}
        color="gray"
      />
      <CalculatorButton
        content="4"
        onClick={() => onClickNumberKeys('4')}
      />
      <CalculatorButton
        content="5"
        onClick={() => onClickNumberKeys('5')}
      />
      <CalculatorButton
        content="6"
        onClick={() => onClickNumberKeys('6')}
      />
      <CalculatorButton
        content={<FaPlus />}
        onClick={() => onClickOperator('+')}
        color="gray"
      />
      <CalculatorButton
        content="1"
        onClick={() => onClickNumberKeys('1')}
      />
      <CalculatorButton
        content="2"
        onClick={() => onClickNumberKeys('2')}
      />
      <CalculatorButton
        content="3"
        onClick={() => onClickNumberKeys('3')}
      />
      <CalculatorButton
        content={<FaDivide />}
        onClick={() => onClickOperator('/')}
        color="gray"
      />
      <CalculatorButton
        content="."
        onClick={() => console.log('T')}
      />

      <CalculatorButton
        content="0"
        onClick={() => onClickNumberKeys('0')}
      />

      <DeleteButton onClick={onDeleteDigit} />

      <EqualButton onClick={() => {}} />
    </div>
  )
}
