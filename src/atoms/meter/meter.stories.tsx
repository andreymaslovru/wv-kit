import { Meta, StoryObj } from '@storybook/react'

import { Meter, MeterProps } from './meter'

const meta: Meta<typeof Meter> = {
  component: Meter,
}

export const constants: MeterProps = {
  min: 0,
  max: 4,
  value: 3,
  label: 'meter-stepper',
}

export default meta

type Story = StoryObj<typeof Meter>;

export const MeterStory: Story = {
  name: 'Meter',
  args: {
    ...constants,
  },
}
