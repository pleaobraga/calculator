import type { Meta, StoryObj } from '@storybook/react'

import { CalculatorVisor } from '.'

const meta = {
  title: 'Visor/Calculator Visor',
  component: CalculatorVisor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalculatorVisor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'text',
  },
}
