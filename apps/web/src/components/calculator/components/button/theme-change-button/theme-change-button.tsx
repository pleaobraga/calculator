import { FaRegMoon, FaMoon } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { useState } from 'react'
import { ICON_COLOR } from '../../../../../contants'

export function ThemeChangeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <CalculatorButton
      content={
        isDarkMode ? (
          <FaRegMoon color={ICON_COLOR} />
        ) : (
          <FaMoon color={ICON_COLOR} />
        )
      }
      onClick={() => setIsDarkMode((state) => !state)}
    />
  )
}
