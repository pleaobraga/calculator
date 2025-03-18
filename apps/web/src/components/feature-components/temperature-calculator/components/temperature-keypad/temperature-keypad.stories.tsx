import type { Meta, StoryObj } from '@storybook/react'

import { TemperatureKeypad } from '.'

const meta = {
  title: 'Keypad/Temperature Keypad',
  component: TemperatureKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    mode: 'temperature',
    onClickNumberKeys: () => {},
    onDeleteDigit: () => {},
    onClear: () => {},
    isDarkMode: false,
    isLocal: true,
    onToggleLocal: () => {},
    onToggleMode: () => {},
    toggleDakMode: () => {},
  },
} satisfies Meta<typeof TemperatureKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
