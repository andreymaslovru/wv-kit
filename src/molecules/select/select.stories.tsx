import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BaseSelect } from './select'

const meta: Meta = {
  component: BaseSelect,
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

type Story = StoryObj<typeof BaseSelect>;

export const BaseSelectStory: Story = {
  name: 'BaseSelect',
  args: {
    label: 'Куда перевести',
    title: 'Бельгия',
    subtitle: 'België',
    icon: 'http://mtsmoney.mts.ru/fs/contact/Belgium.png',
  },
}

export const LoadingSelectStory: Story = {
  name: 'LoadingSelect',
  args: {
    isLoading: true,
    label: 'Куда перевести',
    title: 'Бельгия',
    subtitle: 'België',
    icon: 'http://mtsmoney.mts.ru/fs/contact/Belgium.png',
  },
}

export const ErroredSelectStory: Story = {
  name: 'ErroredSelect',
  args: {
    error: 'Ошибка выбора страны',
    label: 'Куда перевести',
    title: 'Бельгия',
    subtitle: 'België',
    icon: 'http://mtsmoney.mts.ru/fs/contact/Belgium.png',
  },
}
