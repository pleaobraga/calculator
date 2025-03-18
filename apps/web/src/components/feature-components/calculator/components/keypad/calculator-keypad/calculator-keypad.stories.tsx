import type { Meta, StoryObj } from '@storybook/react'

import { CalculatorKeypad } from '.'
import { OperationKeypad } from '@/components/feature-components/operation-calculator/components/operation-keypad'
import { TemperatureKeypad } from '@/components/feature-components/temperature-calculator/components/temperature-keypad'

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
        isDarkMode={false}
        onToggleLocal={() => {}}
        onToggleMode={() => {}}
        toggleDakMode={() => {}}
        isLoading={false}
        isLocal={true}
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
        isDarkMode={false}
        onToggleLocal={() => {}}
        onToggleMode={() => {}}
        toggleDakMode={() => {}}
        isLocal={true}
      />
    ),
  },
}
