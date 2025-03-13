import { divide } from './divide.ts'

describe('divide function', () => {
  test('divides multiple positive numbers correctly', () => {
    expect(divide(100, 2, 5)).toBe(10) // 100 / 2 = 50; 50 / 5 = 10
  })

  test('divides multiple negative numbers correctly', () => {
    expect(divide(-100, -2, -5)).toBe(-10) // -100 / -2 = 50; 50 / -5 = -10
  })

  test('divides a positive and negative number correctly', () => {
    expect(divide(100, -2)).toBe(-50) // 100 / -2 = -50
  })

  test('divides by one correctly (no change)', () => {
    expect(divide(50, 1)).toBe(50)
  })

  test('returns zero when called with no arguments', () => {
    expect(divide()).toBe(0)
  })

  test('handles a single number correctly (should return itself)', () => {
    expect(divide(42)).toBe(42)
  })

  test('throws error when dividing by zero', () => {
    expect(() => divide(100, 0)).toThrow('Division by zero is not allowed')
  })

  test('handles decimals correctly', () => {
    expect(divide(10, 2.5)).toBe(4) // 10 / 2.5 = 4
  })

  test('handles large numbers without precision errors', () => {
    expect(divide(1_000_000, 2, 2, 2)).toBe(125_000) // 1,000,000 / 2 / 2 / 2 = 125,000
  })
})
