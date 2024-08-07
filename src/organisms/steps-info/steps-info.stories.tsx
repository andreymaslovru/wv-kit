import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { StepsInfo, StepsInfoProps } from './steps-info'

export const constants: StepsInfoProps = {
  list: [
    'Отсканируйте QR-код при помощи смартфона',
    'Подтвердите оплату в мобильном приложении своего банка',
    <div>Готово!</div>,
  ],
}

const meta: Meta<typeof StepsInfo> = {
  component: StepsInfo,
}

export default meta

type Story = StoryObj<typeof StepsInfo>;

export const StepsInfoStory: Story = {
  name: 'StepsInfo',
  args: {
    ...constants,
  },
}
