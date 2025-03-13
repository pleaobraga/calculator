export function add(...numbers: number[]) {
  return numbers.reduce((previous, current) => {
    return previous + current
  }, 0)
}
