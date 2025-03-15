import { TemperatureSelect } from './components/temperature-select'

type Props = {
  value: number | string
  onScaleChange: (scale: string) => void
}

export function TemperatureDisplay({ onScaleChange, value }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p>{value}</p>
      <TemperatureSelect />
    </div>
  )
}
