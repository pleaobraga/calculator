import type { Meta, StoryObj } from '@storybook/react'

import { CalculatorButton } from './'

const meta = {
  title: 'Button/Calculator Button',
  component: CalculatorButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {}, content: '1' },
} satisfies Meta<typeof CalculatorButton>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonWhite: Story = {}

export const ButtonGray: Story = {
  args: {
    color: 'gray',
  },
}
