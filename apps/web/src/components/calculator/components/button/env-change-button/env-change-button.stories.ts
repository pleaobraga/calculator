import type { Meta, StoryObj } from '@storybook/react'

import { EnvChangeButton } from '.'

const meta = {
  title: 'Environment Change Button',
  component: EnvChangeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChangeEnv: () => {} },
} satisfies Meta<typeof EnvChangeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
