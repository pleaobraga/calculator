import type { Meta, StoryObj } from '@storybook/react'

import { ThemeChangeButton } from '.'

const meta = {
  title: 'Button/Theme Change Button',
  component: ThemeChangeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {} },
} satisfies Meta<typeof ThemeChangeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
