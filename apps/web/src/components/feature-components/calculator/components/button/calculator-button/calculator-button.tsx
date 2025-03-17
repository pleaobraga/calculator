'use client'

import React from 'react'
import { styles } from './calculator-button.styles'

type Props = {
  className?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  content: React.ReactNode
  color?: 'white' | 'gray'
  disabled?: boolean
}

export function CalculatorButton({
  className = '',
  onClick,
  content,
  color = 'white',
  disabled,
}: Props) {
  return (
    <button
      className={styles({ color, disabled, class: className })}
      onClick={(e) => onClick(e)}
      type="button"
      disabled={disabled}
    >
      {content}
    </button>
  )
}
