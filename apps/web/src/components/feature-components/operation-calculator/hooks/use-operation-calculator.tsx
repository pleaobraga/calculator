'use client'

import { useEffect, useState } from 'react'
import { add, divide, multiply, subtract } from '@repo/operations'
import { Operator } from '@/types/index'
import { useOperationCalculatorAPI } from './use-operation-calculator-api'

type Props = {
  isLocal?: boolean
}

export function useOperationCalculator({ isLocal = true }: Props) {
  const [values, setValues] = useState<number[]>([0])
  const [currentIndexValue, setCurrentIndexValue] = useState(0)
  const [operator, setOperator] = useState<Operator | undefined>(undefined)
  const [history, setHistory] = useState('')
  const [shouldOverrideValue, setShouldOverrideValue] = useState(false)
  const [isFullHistory, setIsFullHistory] = useState(false)

  const {
    calculateAdd,
    calculateDivision,
    calculateMultiply,
    calculateSubtraction,
    isLoading,
  } = useOperationCalculatorAPI({
    values,
    onGetResult,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (Number(e.key) <= 9) {
        updateValues(e.key)
      }

      if (e.key === 'Escape') {
        onClear()
      }

      if (e.key === 'Backspace') {
        deleteDigit()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function updateVisorOnOperator(operator: Operator) {
    setHistory(`${values[0]} ${operator}`)
    setIsFullHistory(false)
    if (currentIndexValue === 0) {
      setShouldOverrideValue(true)
      setCurrentIndexValue(1)
      setValues((state) => [...state, state[0] ?? 0])
    }
  }

  function updateOperator(operator: Operator) {
    setOperator(operator)
    updateVisorOnOperator(operator)
  }

  function getHistory() {
    return history
  }

  function getMainLineVisor() {
    if (!values[currentIndexValue]) return

    return String(values[currentIndexValue])
  }

  function getResultServer() {
    switch (operator) {
      case '*': {
        calculateMultiply()
        return
      }
      case '+': {
        calculateAdd()
        return
      }
      case '-': {
        calculateSubtraction()
        return
      }
      case '/': {
        calculateDivision()
        return
      }
    }
  }

  function getResultLocally() {
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

        return String(result.toFixed(9))
      }
    }
  }

  const updateValues = (digit: string) => {
    if (!digit) return

    let currentValue = String(values[currentIndexValue])

    currentValue = shouldOverrideValue ? digit : currentValue + digit

    if (currentValue && currentValue?.length > 6) {
      return
    }

    if (isFullHistory) {
      setHistory('')
      setIsFullHistory(false)
    }

    setShouldOverrideValue(false)

    setValues((state) => {
      const newState = [...state]
      newState[currentIndexValue] = Number(currentValue)

      return [...newState]
    })
  }

  function deleteDigit() {
    if (isFullHistory) {
      setHistory('')
      setIsFullHistory(false)
    }

    setValues((state) => {
      const newState = [...state]
      const index = newState.length - 1
      let newValue = String(newState[index])

      if (newValue.length === 1) {
        newValue = '0'
      } else {
        newValue = newValue.slice(0, -1)
      }

      newState[index] = Number(newValue)

      return [...newState]
    })
  }

  function updateVisorOnResult(result: string) {
    const [value1, value2] = values
    setHistory(`${value1} ${operator} ${value2} =`)
    setIsFullHistory(true)
    setCurrentIndexValue(0)
    setValues([Number(result)])
    setShouldOverrideValue(true)
  }

  function onGetResult(result?: string) {
    if (result) {
      updateVisorOnResult(result)
    }
  }

  function calculateResult() {
    if (values.length === 2 && operator) {
      if (!isLocal) {
        getResultServer()
        return
      }

      const result = getResultLocally()
      onGetResult(result)
    }
  }

  function onClear() {
    setValues([0])
    setCurrentIndexValue(0)
    setHistory('')
    setIsFullHistory(false)
    setShouldOverrideValue(false)
    setOperator(undefined)
  }

  return {
    getHistory,
    updateValues,
    values,
    deleteDigit,
    getMainLineVisor,
    updateOperator,
    calculateResult,
    onClear,
    isLoading,
  }
}
