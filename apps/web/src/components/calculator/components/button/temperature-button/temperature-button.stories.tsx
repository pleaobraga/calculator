import type { Meta, StoryObj } from '@storybook/react'

import { TemperatureButton } from '.'

const meta = {
  title: 'Button/Temperature Button',
  component: TemperatureButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {} },
} satisfies Meta<typeof TemperatureButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
