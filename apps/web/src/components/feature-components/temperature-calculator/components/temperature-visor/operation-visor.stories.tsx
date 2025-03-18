import type { Meta, StoryObj } from '@storybook/react'

import { TemperatureVisor } from '.'

const meta = {
  title: 'Visor/Temperature Visor',
  component: TemperatureVisor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChangeFrom: () => {},
    onChangeTo: () => {},
    value: 10,
    response: 32,
    defaultValueFrom: 'celsius',
    defaultValueTo: 'celsius',
    isFetching: false,
  },
} satisfies Meta<typeof TemperatureVisor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
