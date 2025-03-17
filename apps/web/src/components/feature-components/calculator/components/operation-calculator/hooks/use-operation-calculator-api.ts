import { ReturnOperationAPI } from '@/types/index'
import { useMutation } from '@tanstack/react-query'

async function postAddFunction({
  values,
}: Pick<Props, 'values'>): Promise<ReturnOperationAPI> {
  const url = process.env.NEXT_PUBLIC_API_URL + '/v1/operation-add'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      numbers: values,
    }),
  })
  return await response.json()
}

async function postSubtractFunction({
  values,
}: Pick<Props, 'values'>): Promise<ReturnOperationAPI> {
  const url = process.env.NEXT_PUBLIC_API_URL + '/v1/operation-subtract'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      numbers: values,
    }),
  })
  return await response.json()
}

async function postDivideFunction({
  values,
}: Pick<Props, 'values'>): Promise<ReturnOperationAPI> {
  const url = process.env.NEXT_PUBLIC_API_URL + '/v1/operation-divide'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      numbers: values,
    }),
  })
  return await response.json()
}

async function postMultiplyFunction({
  values,
}: Pick<Props, 'values'>): Promise<ReturnOperationAPI> {
  const url = process.env.NEXT_PUBLIC_API_URL + '/v1/operation-multiply'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      numbers: values,
    }),
  })
  return await response.json()
}

type Props = {
  values: number[]
  onGetResult: (value: string) => void
}

export function useOperationCalculatorAPI({ values, onGetResult }: Props) {
  const {
    mutate: calculateAdd,
    isPending: isLoadingAdd,
    error: addError,
  } = useMutation({
    mutationFn: () => postAddFunction({ values }),
    onSuccess(data) {
      onGetResult(String(data.result.toFixed(9)))
    },
  })

  const {
    mutate: calculateDivision,
    isPending: isLoadingDivision,
    error: divisionError,
  } = useMutation({
    mutationFn: () => postDivideFunction({ values }),
    onSuccess(data) {
      onGetResult(String(data.result.toFixed(9)))
    },
  })

  const {
    mutate: calculateMultiply,
    isPending: isLoadingMultiply,
    error: multiplyError,
  } = useMutation({
    mutationFn: () => postMultiplyFunction({ values }),
    onSuccess(data) {
      onGetResult(String(data.result.toFixed(9)))
    },
  })

  const {
    mutate: calculateSubtraction,
    isPending: isLoadingSubtraction,
    error: subtractionError,
  } = useMutation({
    mutationFn: () => postSubtractFunction({ values }),
    onSuccess(data) {
      onGetResult(String(data.result.toFixed(9)))
    },
  })

  const isLoading =
    isLoadingAdd ||
    isLoadingSubtraction ||
    isLoadingDivision ||
    isLoadingMultiply
  const hasError =
    addError || subtractionError || divisionError || multiplyError

  return {
    calculateAdd,
    calculateSubtraction,
    calculateDivision,
    calculateMultiply,
    isLoading,
    hasError,
  }
}
