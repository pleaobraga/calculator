import type { Meta, StoryObj } from '@storybook/react'

import { CalculatorKeypad } from '.'
import { OperationKeypad } from '../operation-keypad'
import { TemperatureKeypad } from '../temperature-keypad'

const meta = {
  title: 'Keypad/Calculator Keypad',
  component: CalculatorKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'test',
  },
} satisfies Meta<typeof CalculatorKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithOperationKeypad: Story = {
  args: {
    children: (
      <OperationKeypad
        mode="temperature"
        onClickNumberKeys={() => {}}
        onClickOperator={() => {}}
        onDeleteDigit={() => {}}
        onClear={() => {}}
        onClickResult={() => {}}
      />
    ),
  },
}
export const WithTemperatureKeypad: Story = {
  args: {
    children: (
      <TemperatureKeypad
        mode="temperature"
        onClickNumberKeys={() => {}}
        onDeleteDigit={() => {}}
        onClear={() => {}}
      />
    ),
  },
}
