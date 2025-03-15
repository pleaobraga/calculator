import type { Meta, StoryObj } from '@storybook/react'

import { OperationVisor } from '.'

const meta = {
  title: 'Visor/Operation Visor',
  component: OperationVisor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OperationVisor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    history: '120 + 12',
    result: '132',
  },
}

export const WithoutHistory: Story = {
  args: {
    result: '132',
  },
}
