import type { Meta, StoryObj } from '@storybook/react'

import { Calculator } from '.'

const meta = {
  title: 'Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {} },
} satisfies Meta<typeof Calculator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
