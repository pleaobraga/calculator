'use client'

import { useState } from 'react'
import { CalculatorKeypad } from './components/calculator-keypad'
import { CalculatorVisor } from './components/visor/calculator-visor'
import { OperationVisor } from './components/visor/operation-visor'
import { TemperatureVisor } from './components/visor/temperature-visor'

export function Calculator() {
  const [mode, setMode] = useState<'temperature' | 'operation'>('operation')

  return (
    <div className="w-full h-full">
      <CalculatorVisor>
        {mode === 'operation' && <OperationVisor />}
        {mode === 'temperature' && <TemperatureVisor />}
      </CalculatorVisor>
      <CalculatorKeypad />
    </div>
  )
}
