import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function CalculatorVisor({ children }: Props) {
  return (
    <div className="w-full h-full py-12 px-10 bg-transparent">{children}</div>
  )
}
