import type { Meta, StoryObj } from '@storybook/react'

import { DeleteButton } from '.'

const meta = {
  title: 'Button/Delete Button',
  component: DeleteButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {} },
} satisfies Meta<typeof DeleteButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
