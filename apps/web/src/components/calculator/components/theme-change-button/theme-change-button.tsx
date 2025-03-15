import { FaRegMoon, FaMoon } from 'react-icons/fa6'
import { CalculatorButton } from '../calculator-button'
import { useState } from 'react'

export function ThemeChangeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <CalculatorButton
      content={isDarkMode ? <FaRegMoon /> : <FaMoon />}
      onClick={() => setIsDarkMode((state) => !state)}
    />
  )
}
