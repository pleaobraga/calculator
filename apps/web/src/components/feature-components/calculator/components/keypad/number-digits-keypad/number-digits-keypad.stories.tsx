import type { Meta, StoryObj } from '@storybook/react'

import { NumberDigitsKeypad } from '.'

const meta = {
  title: 'Keypad/Digits/Numbers Digits Keypad',
  component: NumberDigitsKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClickNumberKeys: () => {},
    onDeleteDigit: () => {},
  },
} satisfies Meta<typeof NumberDigitsKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
