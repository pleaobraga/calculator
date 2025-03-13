import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKevin,
  kevinToCelsius,
  fahrenheitToKevin,
  kevinToFahrenheit,
} from './temperature-converter.ts'

describe('Temperature Conversion Functions', () => {
  // Celsius <-> Fahrenheit
  test('converts Celsius to Fahrenheit correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
    expect(celsiusToFahrenheit(100)).toBe(212)
    expect(celsiusToFahrenheit(-40)).toBe(-40) // Edge case
  })

  test('converts Fahrenheit to Celsius correctly', () => {
    expect(fahrenheitToCelsius(32)).toBe(0)
    expect(fahrenheitToCelsius(212)).toBe(100)
    expect(fahrenheitToCelsius(-40)).toBe(-40) // Edge case
  })

  // Celsius <-> Kelvin
  test('converts Celsius to Kelvin correctly', () => {
    expect(celsiusToKevin(0)).toBe(273.15)
    expect(celsiusToKevin(-273.15)).toBe(0) // Absolute zero
  })

  test('converts Kelvin to Celsius correctly', () => {
    expect(kevinToCelsius(273.15)).toBe(0)
    expect(kevinToCelsius(0)).toBe(-273.15) // Absolute zero
  })

  // Fahrenheit <-> Kelvin
  test('converts Fahrenheit to Kelvin correctly', () => {
    expect(fahrenheitToKevin(32)).toBeCloseTo(273.15)
    expect(fahrenheitToKevin(-459.67)).toBeCloseTo(0) // Absolute zero
  })

  test('converts Kelvin to Fahrenheit correctly', () => {
    expect(kevinToFahrenheit(273.15)).toBeCloseTo(32)
    expect(kevinToFahrenheit(0)).toBeCloseTo(-459.67) // Absolute zero
  })

  // Edge Cases
  test('handles extreme temperatures correctly', () => {
    expect(celsiusToFahrenheit(-273.15)).toBeCloseTo(-459.67) // Absolute zero
    expect(fahrenheitToCelsius(-459.67)).toBeCloseTo(-273.15) // Absolute zero
  })

  test('handles decimal precision correctly', () => {
    expect(celsiusToFahrenheit(36.6)).toBeCloseTo(97.88)
    expect(fahrenheitToCelsius(97.88)).toBeCloseTo(36.6)
  })
})
