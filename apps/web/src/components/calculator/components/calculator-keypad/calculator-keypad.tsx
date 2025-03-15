import { twMerge } from 'tailwind-merge'
import {
  FaDivide,
  FaMinus,
  FaPlus,
  FaXmark,
  FaEquals,
  FaTemperatureHigh,
} from 'react-icons/fa6'

import { CalculatorButton } from '../button/calculator-button'
import { ThemeChangeButton } from '../button/theme-change-button/theme-change-button'
import { EnvChangeButton } from '../button/env-change-button'
import { EqualButton } from '../button/equal-button'
import { DeleteButton } from '../button/delete-button/delete-button'
import { TemperatureButton } from '../button/temperature-button'

export function CalculatorKeypad() {
  return (
    <div
      className={twMerge(
        'w-full h-h-full py-12 px-10 bg-gray-100 grid grid-cols-4 gap-4 rounded-t-4xl'
      )}
    >
      <EnvChangeButton onChangeEnv={() => {}} />
      <ThemeChangeButton />

      <TemperatureButton onClick={() => {}} />

      <CalculatorButton
        content={<FaXmark />}
        onClick={() => console.log('X')}
        color="gray"
      />
      <CalculatorButton
        content="7"
        onClick={() => console.log('7')}
      />
      <CalculatorButton
        content="8"
        onClick={() => console.log('8')}
      />
      <CalculatorButton
        content="9"
        onClick={() => console.log('9')}
      />
      <CalculatorButton
        content={<FaMinus />}
        onClick={() => console.log('-')}
        color="gray"
      />
      <CalculatorButton
        content="4"
        onClick={() => console.log('T')}
      />
      <CalculatorButton
        content="5"
        onClick={() => console.log('T')}
      />
      <CalculatorButton
        content="6"
        onClick={() => console.log('T')}
      />
      <CalculatorButton
        content={<FaPlus />}
        onClick={() => console.log('T')}
        color="gray"
      />
      <CalculatorButton
        content="1"
        onClick={() => console.log('T')}
      />
      <CalculatorButton
        content="2"
        onClick={() => console.log('T')}
      />
      <CalculatorButton
        content="3"
        onClick={() => console.log('T')}
      />
      <CalculatorButton
        content={<FaDivide />}
        onClick={() => console.log('/')}
        color="gray"
      />
      <CalculatorButton
        content="."
        onClick={() => console.log('T')}
      />

      <CalculatorButton
        content="0"
        onClick={() => console.log('T')}
      />

      <DeleteButton onClick={() => {}} />

      <EqualButton onClick={() => {}} />
    </div>
  )
}
