import { FaServer, FaDesktop } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { ICON_COLOR } from '@/constants/index'

type Props = {
  isEnvLocal?: boolean
  onChangeEnv: () => void
}

export function EnvChangeButton({ isEnvLocal = true, onChangeEnv }: Props) {
  return (
    <CalculatorButton
      content={
        isEnvLocal ? (
          <FaDesktop color={ICON_COLOR} />
        ) : (
          <FaServer color={ICON_COLOR} />
        )
      }
      onClick={onChangeEnv}
    />
  )
}
