import React from 'react'
import { styles } from './calculator-button.styles'

type Props = {
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  content: React.ReactNode
  color?: 'white' | 'gray'
}

export function CalculatorButton({
  className = '',
  onClick,
  content,
  color = 'white',
}: Props) {
  return (
    <button
      className={styles({ color, class: className })}
      onClick={(e) => onClick(e)}
      type="button"
    >
      {content}
    </button>
  )
}
