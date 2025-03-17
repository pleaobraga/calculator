import { twMerge } from 'tailwind-merge'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export function CalculatorKeypad({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'w-full h-full py-12 px-10 bg-gray-100 rounded-t-4xl dark:bg-gray-800',
        className
      )}
    >
      {children}
    </div>
  )
}
