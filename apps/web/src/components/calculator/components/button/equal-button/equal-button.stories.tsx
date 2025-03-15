import type { Meta, StoryObj } from '@storybook/react'

import { EqualButton } from '.'

const meta = {
  title: 'Button/Equal Button',
  component: EqualButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {} },
} satisfies Meta<typeof EqualButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
