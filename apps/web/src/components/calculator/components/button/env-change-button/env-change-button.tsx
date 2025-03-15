import { FaServer, FaDesktop } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { useState } from 'react'
import { ICON_COLOR } from '../../../../../contants'

type Props = {
  isEnvLocal?: boolean
  onChangeEnv: (isLocal: boolean) => void
}

export function EnvChangeButton({ isEnvLocal = true, onChangeEnv }: Props) {
  const [isLocal, setIsLocal] = useState(isEnvLocal)

  const handleClick = () => {
    onChangeEnv(!isLocal)
    setIsLocal((state) => !state)
  }

  return (
    <CalculatorButton
      content={
        isLocal ? (
          <FaDesktop color={ICON_COLOR} />
        ) : (
          <FaServer color={ICON_COLOR} />
        )
      }
      onClick={handleClick}
    />
  )
}
