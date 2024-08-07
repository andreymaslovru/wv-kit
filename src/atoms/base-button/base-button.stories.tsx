import type { Meta, StoryObj } from '@storybook/react'

import { BaseButton } from './base-button'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
}

export default meta

type Story = StoryObj<typeof BaseButton>;

export const BaseButtonStory: Story = {
  name: 'BaseButton',
  args: {
    children: 'Base Button',
  },
}
