import type { Meta, StoryObj } from '@storybook/react'

import { ListMapper, constants } from './list-mapper'

const meta: Meta<typeof ListMapper> = {
  component: ListMapper,
}

export default meta

type Story = StoryObj<typeof ListMapper>;

export const ListMapperStory: Story = {
  name: 'ListMapper',
  args: {
    list: constants,
  },
}
