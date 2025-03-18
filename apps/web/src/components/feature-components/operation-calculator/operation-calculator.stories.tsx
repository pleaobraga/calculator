import type { Meta, StoryObj } from '@storybook/react'

import { OperationCalculator } from '.'

const meta = {
  title: 'Calculator/Operation Calculator',
  component: OperationCalculator,
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
} satisfies Meta<typeof OperationCalculator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
