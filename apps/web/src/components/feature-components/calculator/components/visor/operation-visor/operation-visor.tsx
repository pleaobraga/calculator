type Props = {
  history?: string
  value?: string
}

export function OperationVisor({ value = '0', history }: Props) {
  return (
    <div className="flex flex-col items-end justify-end gap-2 h-24">
      {history && <p className="text-xl/loose text-gray-400">{history}</p>}
      <p className="font-bold text-5xl">{value}</p>
    </div>
  )
}
