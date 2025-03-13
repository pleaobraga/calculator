export function divide(...numbers: number[]) {
  return numbers.reduce((previous, current, index) => {
    if (index === 0) {
      return current
    }

    return previous / current
  }, 0)
}
