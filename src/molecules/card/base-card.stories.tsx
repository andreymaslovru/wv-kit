import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Percent from '@public/assets/icons/percent.svg'

import { BaseInfoCard, BaseInfoCardProps } from './base-card'

const meta: Meta<typeof BaseInfoCard> = {
  component: BaseInfoCard,
  decorators: [
    (Story) => (
      <div style={{
        height: 'auto',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        padding: '20px 0',
      }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

const card: BaseInfoCardProps = {
  header: 'Комиссия 0₽',
  icon: {
    src: Percent,
    alt: 'иконка процент',
  },
}

  type Story = StoryObj<typeof BaseInfoCard>;

export const baseInfoCardStory: Story = {
  name: 'BaseInfoCard',
  args: { ...card },
}
