import { twMerge } from 'tailwind-merge'
import {
  TemperatureSelect,
  Props as TemperatureSelectProps,
} from './components/temperature-select'

type Props = {
  value: string
  onScaleChange: (scale: string) => void
  valueClassName?: string
} & TemperatureSelectProps

export function TemperatureDisplay({
  onScaleChange,
  value,
  valueClassName,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col items-end justify-end w-full gap-1 my-2">
      <p className={twMerge('font-bold text-2xl', valueClassName)}>{value}</p>
      <TemperatureSelect
        onValueChange={onScaleChange}
        {...rest}
      />
    </div>
  )
}
