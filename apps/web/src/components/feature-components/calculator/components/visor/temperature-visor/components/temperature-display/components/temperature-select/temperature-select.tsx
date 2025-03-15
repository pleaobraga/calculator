import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/base-components/select'
import { ComponentProps } from 'react'
import { TEMPERATURES } from '@repo/temperature-converter'

type Props = ComponentProps<typeof Select> & {
  label?: string // Add custom props if needed
}

export function TemperatureSelect({}: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(TEMPERATURES).map((temp) => {
          return (
            <SelectItem
              key={temp}
              value={temp}
            >
              {temp}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
