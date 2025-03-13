import { multiply } from './multiply.ts'

describe('multiply function', () => {
  test('multiplies multiple positive numbers correctly', () => {
    expect(multiply(2, 3, 4)).toBe(24) // 2 * 3 * 4 = 24
  })

  test('multiplies multiple negative numbers correctly', () => {
    expect(multiply(-2, -3, -4)).toBe(-24) // -2 * -3 * -4 = -24
  })

  test('multiplies positive and negative numbers correctly', () => {
    expect(multiply(-2, 3, -4)).toBe(24) // -2 * 3 * -4 = 24
  })

  test('multiplies by zero correctly', () => {
    expect(multiply(5, 0, 10)).toBe(0) // 5 * 0 * 10 = 0
  })

  test('returns 1 when called with no arguments', () => {
    expect(multiply()).toBe(1) // Default value in reduce() is 1
  })

  test('handles a single number correctly (should return itself)', () => {
    expect(multiply(7)).toBe(7) // 7 * 1 = 7
  })

  test('handles decimals correctly', () => {
    expect(multiply(2.5, 2)).toBe(5) // 2.5 * 2 = 5
  })

  test('handles large numbers correctly', () => {
    expect(multiply(1_000_000, 2, 2)).toBe(4_000_000) // 1,000,000 * 2 * 2 = 4,000,000
  })

  test('handles multiplication by one correctly (identity property)', () => {
    expect(multiply(1, 10, 1)).toBe(10) // Identity property of multiplication
  })
})
