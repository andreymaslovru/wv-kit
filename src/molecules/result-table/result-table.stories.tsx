import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ResultTable } from './result-table'

const meta: Meta<typeof ResultTable> = {
  component: ResultTable,
  decorators: [
    (Story) => (
      <div style={{
        height: 'auto',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        padding: '20px 32px',
      }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ResultTable>;

const items = [
  {
    key: 'Сумма перевода',
    value: '15 384,62 RUB',
  },
  {
    key: 'Дата и время',
    value: '30 июня 2024, 16:00',
  },
  {
    key: 'На карту',
    value: 'Visa ·· 5678',
  },
]

export const baseResultTable: Story = {
  name: 'baseResultTable',
  args: {
    items,
  },
}

export const DetailedResultTable: Story = {
  name: 'DetailedResultTable',
  args: {
    items,
    isDetailed: true,
  },
}
