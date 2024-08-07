import { Meta, StoryObj } from '@storybook/react'

import Percent from '@public/assets/icons/percent.svg'

import { Icon, IconProps } from './icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
}

export default meta

const icon: IconProps = {
  src: Percent,
  alt: 'иконка процент',
}

  type Story = StoryObj<typeof Icon>;

export const iconStory: Story = {
  name: 'Icon',
  args: { ...icon },
}
