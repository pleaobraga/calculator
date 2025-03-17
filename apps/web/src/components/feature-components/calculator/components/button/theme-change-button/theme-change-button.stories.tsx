import type { Meta, StoryObj } from '@storybook/react'

import { ThemeChangeButton } from '.'
import { useState } from 'react'

const meta = {
  title: 'Button/Theme Change Button',
  component: ThemeChangeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { isDarkMode: true, toggleDakMode: () => {} },
} satisfies Meta<typeof ThemeChangeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
      <ThemeChangeButton
        isDarkMode={isDarkMode}
        toggleDakMode={() => {
          setIsDarkMode((state) => !state)
        }}
      />
    )
  },
}
