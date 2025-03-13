import { add } from "./add.ts"

describe('add function', () => {
  test('adds multiple positive numbers correctly', () => {
    expect(add(1, 2, 3, 4)).toBe(10)
  })

  test('adds multiple negative numbers correctly', () => {
    expect(add(-1, -2, -3, -4)).toBe(-10)
  })

  test('adds positive and negative numbers correctly', () => {
    expect(add(1, -2, 3, -4)).toBe(-2)
  })

  test('returns zero when called with no arguments', () => {
    expect(add()).toBe(0)
  })

  test('handles a single number correctly', () => {
    expect(add(5)).toBe(5)
  })

  test('handles decimal numbers correctly', () => {
    expect(add(1.5, 2.5, 3)).toBe(7)
  })

  test('handles large numbers without overflow', () => {
    expect(add(1_000_000, 2_000_000, 3_000_000)).toBe(6_000_000)
  })
})
