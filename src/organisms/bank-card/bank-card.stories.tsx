import type { Meta, StoryObj } from '@storybook/react'

import { BankCard, constants } from './bank-card'

const meta: Meta<typeof BankCard> = {
  component: BankCard,
}

export default meta

type Story = StoryObj<typeof BankCard>;

export const BankCardStory: Story = {
  name: 'BankCard',
  args: {
    ...constants,
  },
}
