import { FaDeleteLeft } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { ICON_COLOR } from '@/constants/index'

type Props = {
  onClick: () => void
}

export function DeleteButton({ onClick }: Props) {
  return (
    <CalculatorButton
      content={<FaDeleteLeft color={ICON_COLOR} />}
      onClick={onClick}
    />
  )
}
