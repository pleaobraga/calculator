import { FaDivide, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'

import { EqualButton } from '../../button/equal-button'
import { CalculatorButton } from '../../button/calculator-button'
import { Operator } from '@/types/index'

type Props = {
  onClickOperator: (operator: Operator) => void
  onClickResult: () => void
}

export function OperationDigitsKeypad({
  onClickOperator,
  onClickResult,
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

      <EqualButton onClick={onClickResult} />
    </div>
  )
}
