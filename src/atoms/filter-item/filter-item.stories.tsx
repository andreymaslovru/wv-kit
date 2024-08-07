import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FilterItem } from './filter-item'

const meta: Meta = {
  component: FilterItem,
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        background: '#000000',
      }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof FilterItem>;

export const FilterItemStory: Story = {
  name: 'FilterItem',
  args: {
    label: 'По номеру телефона',
    size: 'sm',
    selected: true,
  },
}

export const FilterItemWithIcon: Story = {
  name: 'FilterItemWithIcon',
  args: {
    label: 'USD',
    size: 'md',
    selected: true,
    icon: 'http://mtsmoney.mts.ru/fs/contact/Belgium.png',
  },
}

export const FilterItemLarge: Story = {
  name: 'FilterItemLarge',
  args: {
    label: 'Паспорт РФ',
    size: 'lg',
    selected: true,
  },
}
