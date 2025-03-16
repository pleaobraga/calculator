import { FaTemperatureHigh } from 'react-icons/fa6'
import { BiMath } from 'react-icons/bi'
import { CalculatorButton } from '../calculator-button'
import { ICON_COLOR } from '@/constants/index'

type Props = {
  onClick: () => void
  mode: 'temperature' | 'operation'
}

export function ModeButton({ onClick, mode }: Props) {
  function getContent() {
    switch (mode) {
      case 'operation': {
        return (
          <BiMath
            size={30}
            color={ICON_COLOR}
          />
        )
      }
      case 'temperature': {
        return <FaTemperatureHigh color={ICON_COLOR} />
      }
    }
  }

  return (
    <CalculatorButton
      content={getContent()}
      onClick={onClick}
    />
  )
}
