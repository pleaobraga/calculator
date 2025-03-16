import type { Meta, StoryObj } from '@storybook/react'

import { ActionsDigitsKeypad } from '.'

const meta = {
  title: 'Keypad/Digits/Actions Keypad',
  component: ActionsDigitsKeypad,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    mode: 'temperature',
  },
} satisfies Meta<typeof ActionsDigitsKeypad>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
