import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SelectItem } from './select-item'

const meta: Meta = {
  component: SelectItem,
  decorators: [
    (Story) => (
      <div style={{
        width: '100%',
        minHeight: '150px',
        background: '#1D2023',
        borderRadius: '32px',
        padding: '12px 20px',
      }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SelectItem>;

export const BaseSelectStory: Story = {
  name: 'BaseSelect',
  args: {
    title: 'Бельгия',
    subtitle: 'België',
    icon: 'http://mtsmoney.mts.ru/fs/contact/Belgium.png',
  },
}
