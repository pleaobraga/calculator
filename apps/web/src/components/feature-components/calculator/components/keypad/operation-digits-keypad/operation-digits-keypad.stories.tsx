import type { Meta, StoryObj } from '@storybook/react'

import { OperationDigitsKeypad } from '.'

const meta = {
  title: 'Keypad/Digits/Operation Keypad',
  component: OperationDigitsKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClickOperator: () => {},
  },
} satisfies Meta<typeof OperationDigitsKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
