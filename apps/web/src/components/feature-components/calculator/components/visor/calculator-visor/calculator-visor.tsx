import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function CalculatorVisor({ children }: Props) {
  return <div className="w-full h-full p-10 bg-transparent">{children}</div>
}
