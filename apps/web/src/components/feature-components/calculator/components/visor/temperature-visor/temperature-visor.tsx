import { TemperatureUnit } from '@/types/index'
import { TemperatureDisplay } from './components/temperature-display'

type Props = {
  value: number
  onChangeFrom: (value: TemperatureUnit) => void
  onChangeTo: (value: TemperatureUnit) => void
  response?: number | null
  defaultValueTo: TemperatureUnit
  defaultValueFrom: TemperatureUnit
}

export function TemperatureVisor({
  onChangeFrom,
  onChangeTo,
  value,
  response,
  defaultValueFrom,
  defaultValueTo,
}: Props) {
  return (
    <div className="flex flex-col items-end justify-end gap-4">
      <TemperatureDisplay
        onScaleChange={onChangeFrom}
        value={String(value)}
        name="from"
        defaultValue={defaultValueFrom}
      />
      <TemperatureDisplay
        onScaleChange={onChangeTo}
        value={response || response === 0 ? String(response) : 'loading'}
        valueClassName="font-medium text-3xl"
        name="to"
        defaultValue={defaultValueTo}
      />
    </div>
  )
}
