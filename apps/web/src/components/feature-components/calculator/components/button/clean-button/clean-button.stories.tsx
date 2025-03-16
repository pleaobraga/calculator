import type { Meta, StoryObj } from '@storybook/react'

import { CleanButton } from '.'

const meta = {
  title: 'Button/Clean Button',
  component: CleanButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {} },
} satisfies Meta<typeof CleanButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
