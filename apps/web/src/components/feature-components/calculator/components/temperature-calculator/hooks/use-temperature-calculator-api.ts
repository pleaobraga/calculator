import { useQuery } from '@tanstack/react-query'

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/v1/convert-temperature'

async function getConvertTemperatureFunction({ from, to, value }: Props) {
  const url = new URL(API_URL)

  url.searchParams.append('from', from)
  url.searchParams.append('to', to)
  url.searchParams.append('value', value)

  const response = await fetch(url)
  return await response.json()
}

type Props = {
  from: string
  to: string
  value: string
}

export function useTemperatureCalculatorAPI({ from, to, value }: Props) {
  const { data, refetch, isFetching, error } = useQuery({
    queryKey: ['temperature-converter'],
    queryFn: () => getConvertTemperatureFunction({ from, to, value }),
    enabled: false,
  })

  return {
    refetch,
    data,
    isFetching,
    error,
  }
}
