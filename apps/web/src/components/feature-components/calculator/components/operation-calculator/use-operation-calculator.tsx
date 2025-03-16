'use client'

import { useEffect, useState } from 'react'
import { add, divide, multiply, subtract } from '@repo/operations'
import { Operator } from '@/types/index'

export function useOperationCalculator() {
  const [values, setValues] = useState<number[]>([0])
  const [currentIndexValue, setCurrentIndexValue] = useState(0)
  const [operator, setOperator] = useState<Operator | undefined>(undefined)
  const [history, setHistory] = useState('')
  const [shouldOverrideValue, setShouldOverrideValue] = useState(false)
  const [isFullHistory, setIsFullHistory] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

        return String(result.toFixed(9))
      }
    }
  }

  function updateValues(digit: string) {
    if (!digit) return

    let currentValue = String(values[currentIndexValue])

    currentValue = shouldOverrideValue ? digit : currentValue + digit

    if (currentValue && currentValue?.length > 6) {
      return
    }

    if (isFullHistory && shouldOverrideValue) {
      setIsFullHistory(false)
      setHistory('')
    }

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
    const [value1, value2] = values
    setHistory(`${value1} ${operator} ${value2} =`)
    setIsFullHistory(true)
    setCurrentIndexValue(0)
    setValues([Number(result)])
    setShouldOverrideValue(true)
  }

  function calculateResult() {
    if (values.length === 2 && operator) {
      const result = getResult()
      if (result) {
        updateVisorOnResult(result)
      }
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
    getResult,
    updateValues,
    values,
    deleteDigit,
    getMainLineVisor,
    updateOperator,
    calculateResult,
    onClear,
  }
}
