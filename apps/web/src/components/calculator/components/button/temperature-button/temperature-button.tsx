import { FaEquals, FaTemperatureHigh } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { ICON_COLOR } from '../../../../../contants'

type Props = {
  onClick: () => void
}

export function TemperatureButton({ onClick }: Props) {
  return (
    <CalculatorButton
      content={<FaTemperatureHigh color={ICON_COLOR} />}
      onClick={onClick}
    />
  )
}
