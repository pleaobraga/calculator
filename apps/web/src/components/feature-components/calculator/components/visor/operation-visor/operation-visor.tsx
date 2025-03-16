type Props = {
  history?: string
  value?: string
}

export function OperationVisor({ value = '0', history }: Props) {
  console.log(`history`, history)

  return (
    <div className="flex flex-col items-end justify-end gap-2">
      {history && <p className="text-xl/loose text-gray-400">{history}</p>}
      <p className="font-bold text-5xl">{value}</p>
    </div>
  )
}
