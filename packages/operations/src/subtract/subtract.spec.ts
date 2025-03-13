import { subtract } from './subtract.ts'

describe('subtract function', () => {
  test('subtracts multiple positive numbers correctly', () => {
    expect(subtract(100, 20, 10)).toBe(70) // 100 - 20 - 10 = 70
  })

  test('subtracts multiple negative numbers correctly', () => {
    expect(subtract(-100, -20, -10)).toBe(-70) // -100 - (-20) - (-10) = -70
  })

  test('subtracts positive and negative numbers correctly', () => {
    expect(subtract(100, -20, 10)).toBe(110) // 100 - (-20) - 10 = 110
  })

  test('subtracts a single number correctly (returns itself)', () => {
    expect(subtract(42)).toBe(42)
  })

  test('returns zero when called with no arguments', () => {
    expect(subtract()).toBe(0)
  })

  test('handles zero correctly as part of the subtraction', () => {
    expect(subtract(50, 0)).toBe(50)
    expect(subtract(0, 50)).toBe(-50)
  })

  test('handles decimals correctly', () => {
    expect(subtract(10, 2.5)).toBe(7.5) // 10 - 2.5 = 7.5
  })

  test('handles large numbers without precision errors', () => {
    expect(subtract(1_000_000, 500_000, 250_000)).toBe(250_000)
  })

  test('handles repeated subtraction correctly', () => {
    expect(subtract(50, 10, 5, 5)).toBe(30) // 50 - 10 - 5 - 5 = 30
  })
})
