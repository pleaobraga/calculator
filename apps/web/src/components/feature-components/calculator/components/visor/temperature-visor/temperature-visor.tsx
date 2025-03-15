import { TemperatureDisplay } from './components/temperature-display'

type Props = {
  value: number
  onChangeFrom: (value: string) => void
  onChangeTo: (value: string) => void
  response?: number
}

export function TemperatureVisor({
  onChangeFrom,
  onChangeTo,
  value,
  response,
}: Props) {
  return (
    <div className="flex flex-col items-end justify-end gap-2">
      <TemperatureDisplay
        onScaleChange={onChangeFrom}
        value={value}
      />
      <TemperatureDisplay
        onScaleChange={onChangeTo}
        value={response ?? 'loading'}
      />
    </div>
  )
}
