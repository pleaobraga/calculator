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
    <div className="flex flex-col items-end justify-end gap-4">
      <TemperatureDisplay
        onScaleChange={onChangeFrom}
        value={String(value)}
        name="from"
      />
      <TemperatureDisplay
        onScaleChange={onChangeTo}
        value={response ? String(response) : 'loading'}
        valueClassName="font-medium text-3xl"
        name="to"
      />
    </div>
  )
}
