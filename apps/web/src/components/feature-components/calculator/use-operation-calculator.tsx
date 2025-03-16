'use client'

import { useEffect, useState } from 'react'

type Operator = '+' | '-' | '/' | '*'

type Props = {
  showResult: boolean
}

export function useOperationCalculator() {
  const [values, setValues] = useState<number[]>([0])
  const [currentIndexValue, setCurrentIndexValue] = useState(0)
  const [operator, setOperator] = useState<Operator | undefined>(undefined)
  const [history, setHistory] = useState('')

  useEffect(() => {
    if (operator) {
      setHistory(`${values[0]} ${operator}`)
      setValues((state) => [...state, state[0] ?? 0])
      setCurrentIndexValue(1)
    }
  }, [operator])

  function getHistory() {
    if (values.length === 2 && operator) {
      return `${values[0]} ${operator} ${values[1]}`
    }

    return ''
  }

  function getMainLineVisor() {
    if (!values[currentIndexValue]) return

    return String(values[currentIndexValue])
  }

  function getResult() {
    switch (operator) {
      case '*': {
        const result = Number(values[0]) * Number(values[1])
        return String(result)
      }
      case '+': {
        const result = Number(values[0]) + Number(values[1])
        return String(result)
      }
      case '-': {
        const result = Number(values[0]) - Number(values[1])
        return String(result)
      }
      case '/': {
        const result = Number(values[0]) / Number(values[1])
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

    currentValue += digit

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

  function updateOperator(operator: Operator) {
    setOperator(operator)
  }

  return {
    getHistory,
    getResult,
    updateValues,
    values,
    deleteDigit,
    getMainLineVisor,
    updateOperator,
  }
}
