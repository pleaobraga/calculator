import type { Meta, StoryObj } from '@storybook/react'

import { CalculatorKeypad } from '.'

const meta = {
  title: 'Calculator Keypad',
  component: CalculatorKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {}, content: '1' },
} satisfies Meta<typeof CalculatorKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
