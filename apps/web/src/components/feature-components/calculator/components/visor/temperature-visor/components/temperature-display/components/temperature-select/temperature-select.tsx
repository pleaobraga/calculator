import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/base-components/select'
import { ComponentProps } from 'react'
import { TEMPERATURES } from '@repo/temperature-converter'

export type Props = ComponentProps<typeof Select>

export function TemperatureSelect({ onValueChange, ...props }: Props) {
  return (
    <Select {...props}>
      <SelectTrigger className="border-none shadow-none gap-1">
        <SelectValue placeholder="Select a scale" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(TEMPERATURES).map((temp) => {
          return (
            <SelectItem
              key={temp}
              value={temp}
              onClick={() => onValueChange?.(temp)}
            >
              {temp}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}
