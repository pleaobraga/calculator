import {
  celsiusToFahrenheit,
  celsiusToKevin,
  fahrenheitToCelsius,
  fahrenheitToKevin,
  kevinToCelsius,
  kevinToFahrenheit,
  TEMPERATURES,
} from '@repo/temperature-converter'

type Props = {
  from: (typeof TEMPERATURES)[keyof typeof TEMPERATURES]
  to: (typeof TEMPERATURES)[keyof typeof TEMPERATURES]
  value: number
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

export function convertTemperature({ from, to, value }: Props): number {
  const converterName = `${from.toLocaleLowerCase()}To${to.toLowerCase()}`

  const converter = converterTemperatureMap[converterName]

  if (!converter) {
    throw new Error(`Conversion from ${from} to ${to} is not supported.`)
  }

  return converter.function(value)
}
