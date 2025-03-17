import { useMutation } from '@tanstack/react-query'

async function postAddFunction({ values }: Pick<Props, 'values'>) {
  const url = process.env.NEXT_PUBLIC_API_URL + '/v1/operation-add'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values,
    }),
  })
  return await response.json()
}

type Props = {
  values: number[]
}

export function useOperationCalculatorAPI({ values }: Props) {
  const {
    data: addResult,
    mutate: calculateAdd,
    isPending: isLoadingAdd,
    error: addError,
  } = useMutation({
    mutationFn: () => postAddFunction({ values }),
  })

  return {
    calculateAdd,
    addResult,
    isLoadingAdd,
    addError,
  }
}
