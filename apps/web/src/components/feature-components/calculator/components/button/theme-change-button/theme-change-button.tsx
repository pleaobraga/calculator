import { FaRegMoon, FaMoon } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { ICON_COLOR } from '@/constants/index'

type Props = {
  toggleDakMode: () => void
  isDarkMode: boolean
}

export function ThemeChangeButton({ toggleDakMode, isDarkMode }: Props) {
  return (
    <CalculatorButton
      content={
        isDarkMode ? (
          <FaMoon color={ICON_COLOR} />
        ) : (
          <FaRegMoon color={ICON_COLOR} />
        )
      }
      onClick={toggleDakMode}
    />
  )
}
