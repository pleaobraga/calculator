import { FaDivide, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'

import { Operator } from '@/types/index'
import { CalculatorButton } from '@/components/feature-components/calculator/components/button/calculator-button'
import { EqualButton } from '@/components/feature-components/calculator/components/button/equal-button'

type Props = {
  onClickOperator: (operator: Operator) => void
  onClickResult: () => void
  isLoading: boolean
}

export function OperationDigitsKeypad({
  onClickOperator,
  onClickResult,
  isLoading,
}: Props) {
  return (
    <div className={'w-full h-full grid grid-cols-1 gap-4'}>
      <CalculatorButton
        content={<FaXmark />}
        onClick={() => onClickOperator('*')}
        color="gray"
      />

      <CalculatorButton
        content={<FaMinus />}
        onClick={() => onClickOperator('-')}
        color="gray"
      />

      <CalculatorButton
        content={<FaPlus />}
        onClick={() => onClickOperator('+')}
        color="gray"
      />

      <CalculatorButton
        content={<FaDivide />}
        onClick={() => onClickOperator('/')}
        color="gray"
      />

      <EqualButton
        disabled={isLoading}
        onClick={onClickResult}
      />
    </div>
  )
}
