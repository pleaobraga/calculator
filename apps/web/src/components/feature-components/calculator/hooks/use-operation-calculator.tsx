'use client'

import { useState } from 'react'
import { add, divide, multiply, subtract } from '@repo/operations'
import { Operator } from '@/types/index'

export function useOperationCalculator() {
  const [values, setValues] = useState<number[]>([0])
  const [currentIndexValue, setCurrentIndexValue] = useState(0)
  const [operator, setOperator] = useState<Operator | undefined>(undefined)
  const [history, setHistory] = useState('')
  const [shouldOverrideValue, setShouldOverrideValue] = useState(false)
  const [showResult, setShowResult] = useState(false)

  function updateVisor(operator: Operator) {
    setHistory(`${values[0]} ${operator}`)
    if (currentIndexValue === 0) {
      setShouldOverrideValue(true)
      setCurrentIndexValue(1)
      setValues((state) => [...state, state[0] ?? 0])
    }
  }

  function updateOperator(operator: Operator) {
    setOperator(operator)
    updateVisor(operator)
  }

  function getHistory() {
    if (values.length === 2 && operator) {
      console.log(`history inside`, history)
      return history
    }

    return ''
  }

  function getMainLineVisor() {
    if (showResult && values.length === 2) {
      return getResult()
    }

    if (!values[currentIndexValue]) return

    return String(values[currentIndexValue])
  }

  function getResult() {
    switch (operator) {
      case '*': {
        const result = multiply(...values)
        return String(result)
      }
      case '+': {
        const result = add(...values)
        return String(result)
      }
      case '-': {
        const result = subtract(...values)
        return String(result)
      }
      case '/': {
        const result = divide(...values)
        return String(result)
      }
    }
  }

  function updateValues(digit: string) {
    if (!digit) return

    let currentValue = String(values[currentIndexValue])

    if (currentValue && currentValue?.length > 6) {
      return
    }

    currentValue = shouldOverrideValue ? digit : currentValue + digit

    setShouldOverrideValue(false)

    setValues((state) => {
      const newState = [...state]
      newState[currentIndexValue] = Number(currentValue)

      return [...newState]
    })
  }

  function deleteDigit() {
    setValues((state) => {
      const newState = [...state]
      let newValue = String(newState[currentIndexValue])

      if (newValue.length === 1) {
        newValue = '0'
      } else {
        newValue = newValue.slice(0, -1)
      }

      newState[currentIndexValue] = Number(newValue)

      return [...newState]
    })
  }

  function updateVisorOnResult(result: string) {
    setHistory(`${values[0]} ${operator} ${values[1]}`)
    setCurrentIndexValue(0)
    setValues([Number(result)])
  }

  function calculateResult() {
    setShowResult(true)
    const result = getResult()
    updateVisorOnResult(result!)
  }

  return {
    getHistory,
    getResult,
    updateValues,
    values,
    deleteDigit,
    getMainLineVisor,
    updateOperator,
    calculateResult,
  }
}
