import type { Meta, StoryObj } from '@storybook/react'

import { CustomTooltip, CustomTooltipProps } from './custom-tooltip'

const meta: Meta<typeof CustomTooltip> = {
  component: CustomTooltip,
}

const constants: CustomTooltipProps = {
  description: 'Текст заглушка :)',
  icon: '/assets/infoIcon.svg',
}

export default meta

type Story = StoryObj<typeof CustomTooltip>;

export const TooltipStory: Story = {
  name: 'CustomTooltip',
  args: {
    ...constants,
  },
}
