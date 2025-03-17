import { FaEquals } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { twMerge } from 'tailwind-merge'

type Props = {
  onClick: () => void
  disabled?: boolean
}

export function EqualButton({ onClick, disabled = false }: Props) {
  return (
    <CalculatorButton
      className={twMerge(
        'bg-gradient-to-r from-[#ED0E98] to-[#FE5A2D]',
        'disabled:bg-gray-200 disabled:from-gray-200 disabled:to-gray-200 disabled:opacity-10'
      )}
      content={<FaEquals />}
      onClick={onClick}
      disabled={disabled}
    />
  )
}
