export function multiply(...numbers: number[]) {
  return numbers.reduce((previous, current) => {
    return previous * current
  }, 1)
}
