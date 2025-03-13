export function divide(...numbers: number[]) {
  return numbers.reduce((previous, current, index) => {
    if (index === 0) {
      return current
    }

    if (current === 0) {
      throw new Error('Division by zero is not allowed')
    }

    return previous / current
  }, 0)
}
