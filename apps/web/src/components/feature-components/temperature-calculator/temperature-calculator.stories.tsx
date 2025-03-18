import type { Meta, StoryObj } from '@storybook/react'

import { TemperatureCalculator } from '.'

const meta = {
  title: 'Calculator/Temperature Calculator',
  component: TemperatureCalculator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isDarkMode: false,
    isLocal: true,
    mode: 'operation',
    onToggleLocal: () => {},
    onToggleMode: () => {},
    toggleDakMode: () => {},
  },
} satisfies Meta<typeof TemperatureCalculator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
