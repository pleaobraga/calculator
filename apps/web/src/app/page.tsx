import { Calculator } from '@/components/feature-components/calculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculator',
  description: 'Calculator that can perform simple operations',
}

export default function Home() {
  return (
    <div className=" flex justify-center items-center w-full h-[100vh]">
      <div className="max-w-[800px]">
        <Calculator />
      </div>
    </div>
  )
}
