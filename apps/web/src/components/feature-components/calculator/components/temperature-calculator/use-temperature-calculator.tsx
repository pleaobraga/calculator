import { TemperatureUnit } from '@/types/index'
import { useEffect, useState } from 'react'
import {
  celsiusToFahrenheit,
  celsiusToKevin,
  fahrenheitToCelsius,
  fahrenheitToKevin,
  kevinToCelsius,
  kevinToFahrenheit,
  TEMPERATURES,
} from '@repo/temperature-converter'

export function useTemperatureCalculator() {
  const [from, setFrom] = useState<TemperatureUnit>('celsius')
  const [to, setTo] = useState<TemperatureUnit>('celsius')
  const [value, setValue] = useState(0)
  const [converted, setConverted] = useState<null | number>(0)

  useEffect(() => {
    getConvertedValue()
  }, [value, from, to])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClear()
      }

      if (e.key === 'Backspace' || e.key === 'Escape') {
        deleteDigit()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function onChangeFrom(unit: TemperatureUnit) {
    setFrom(unit)
  }

  function onChangeTo(unit: TemperatureUnit) {
    setTo(unit)
  }

  function onClear() {
    setValue(0)
    setTo(from)
  }

  function getConvertedValue() {
    if (from === to) {
      setConverted(value)
      return
    }

    const converterTemperatureMap = {
      [`${TEMPERATURES.CELSIUS}To${TEMPERATURES.FAHRENHEIT}`]: {
        function: celsiusToFahrenheit,
      },
      [`${TEMPERATURES.CELSIUS}To${TEMPERATURES.KELVIN}`]: {
        function: celsiusToKevin,
      },
      [`${TEMPERATURES.FAHRENHEIT}To${TEMPERATURES.CELSIUS}`]: {
        function: fahrenheitToCelsius,
      },
      [`${TEMPERATURES.FAHRENHEIT}To${TEMPERATURES.KELVIN}`]: {
        function: fahrenheitToKevin,
      },
      [`${TEMPERATURES.KELVIN}To${TEMPERATURES.CELSIUS}`]: {
        function: kevinToCelsius,
      },
      [`${TEMPERATURES.KELVIN}To${TEMPERATURES.FAHRENHEIT}`]: {
        function: kevinToFahrenheit,
      },
    }

    const converterName = `${from.toLocaleLowerCase()}To${to.toLowerCase()}`

    const converter = converterTemperatureMap[converterName]

    if (!converter) {
      throw new Error(`Conversion from ${from} to ${to} is not supported.`)
    }

    const convertedValue = converter.function(value)

    setConverted(Number(convertedValue?.toFixed(5)))
  }

  function updateValue(digit: string) {
    if (!digit) return

    let currentValue = String(value)

    if (currentValue && currentValue?.length > 6) {
      return
    }

    currentValue = currentValue + digit

    setValue(Number(currentValue))
  }

  function deleteDigit() {
    setValue((state) => {
      if (state < 10) {
        return Number(0)
      }

      let newValue = String(state)

      newValue = newValue.slice(0, -1)

      return Number(newValue)
    })
  }

  return {
    onChangeFrom,
    onChangeTo,
    value,
    converted,
    onClear,
    updateValue,
    deleteDigit,
    from,
    to,
  }
}
