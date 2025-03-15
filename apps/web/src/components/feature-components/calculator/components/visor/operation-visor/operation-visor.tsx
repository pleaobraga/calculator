type Props = {
  history?: string
  result: string
}

export function OperationVisor({ result, history }: Props) {
  return (
    <div className="flex flex-col items-end justify-end gap-2">
      {history && <p className="text-xl/loose text-gray-400">{history}</p>}
      <p className="font-bold text-5xl">{result}</p>
    </div>
  )
}
