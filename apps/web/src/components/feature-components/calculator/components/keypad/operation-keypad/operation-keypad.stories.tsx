import type { Meta, StoryObj } from '@storybook/react'

import { OperationKeypad } from '.'

const meta = {
  title: 'Keypad/Operation Keypad',
  component: OperationKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    mode: 'temperature',
    onClickNumberKeys: () => {},
    onClickOperator: () => {},
    onDeleteDigit: () => {},
  },
} satisfies Meta<typeof OperationKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
