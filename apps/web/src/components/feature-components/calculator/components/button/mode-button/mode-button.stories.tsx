import type { Meta, StoryObj } from '@storybook/react'

import { ModeButton } from '.'

const meta = {
  title: 'Button/Mode Button',
  component: ModeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {}, mode: 'temperature' },
} satisfies Meta<typeof ModeButton>

export default meta
type Story = StoryObj<typeof meta>

export const ModeTemperature: Story = {}

export const ModeOperation: Story = {
  args: {
    mode: 'operation',
  },
}
