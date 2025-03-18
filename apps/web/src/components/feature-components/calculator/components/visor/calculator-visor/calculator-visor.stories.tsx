import type { Meta, StoryObj } from '@storybook/react'

import { CalculatorVisor } from '.'
import { OperationVisor } from '../operation-visor'
import { TemperatureVisor } from '@/components/feature-components/temperature-calculator/components/temperature-visor'

const meta = {
  title: 'Visor/Calculator Visor',
  component: CalculatorVisor,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'text',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalculatorVisor>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'text',
  },
}

export const WithOperationVisor: Story = {
  render: () => (
    <CalculatorVisor>
      <OperationVisor
        value="124"
        history="12*12"
      />
    </CalculatorVisor>
  ),
}

export const WithTemperatureVisor: Story = {
  render: () => (
    <CalculatorVisor>
      <TemperatureVisor
        onChangeFrom={() => {}}
        onChangeTo={() => {}}
        value={12}
        response={34}
        defaultValueFrom="celsius"
        defaultValueTo="celsius"
        isFetching={false}
      />
    </CalculatorVisor>
  ),
}
