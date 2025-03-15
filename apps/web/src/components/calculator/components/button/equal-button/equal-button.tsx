import { FaEquals } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'

type Props = {
  onClick: () => void
}

export function EqualButton({ onClick }: Props) {
  return (
    <CalculatorButton
      className="bg-gradient-to-r from-[#ED0E98] to-[#FE5A2D]"
      content={<FaEquals />}
      onClick={onClick}
    />
  )
}
