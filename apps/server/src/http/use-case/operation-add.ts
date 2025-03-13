import { add } from '@repo/operations'

export function operationAdd(numbers: number[]) {
  return add(...numbers)
}
