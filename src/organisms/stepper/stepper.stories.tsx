import type { Meta, StoryObj } from '@storybook/react'

import { Stepper } from './stepper'

const constants = {
  min: 0,
  max: 4,
  value: 4,
  tooltip: 'TT',
  handleClick: () => {},
}

const meta: Meta<typeof Stepper> = {
  component: Stepper,
}

export default meta

type Story = StoryObj<typeof Stepper>;

export const StepperStory: Story = {
  name: 'Stepper',
  args: {
    ...constants,
  },
}
