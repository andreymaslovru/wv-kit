import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Input } from '@mui/material'

import { BaseButton } from '@atoms'

import { BaseModal } from './modal'

const meta: Meta = {
  component: BaseModal,
  decorators: [
    (Story) => (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
      }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof BaseModal>;

export const BaseModalStory: Story = {
  name: 'BaseModal',
  args: {
    handleClose: () => console.log('close'),
    open: true,
    children: 'Валюта зависит от страны и банка, в который вы хотите сделать перевод. Можно перевести деньги в рублях, долларах, евро и национальных валютах.',
    header: 'В какой валюте я могу отправить деньги?',
  },
}

export const BaseModalWithSubheader: Story = {
  name: 'BaseModalWithSubheader',
  args: {
    handleClose: () => console.log('close'),
    open: true,
    children: 'Валюта зависит от страны и банка, в который вы хотите сделать перевод. Можно перевести деньги в рублях, долларах, евро и национальных валютах.',
    header: 'Uzcard',
    subheader: 'Перевод по номеру карты',
  },
}

export const BaseModalWithSubheaderAndContent: Story = {
  name: 'BaseModalWithSubheaderAndContent',
  args: {
    handleClose: () => console.log('close'),
    open: true,
    header: 'Uzcard',
    subheader: 'Перевод по номеру карты',
    children: (
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginBottom: '20px',
        }}
        >
          <Input type="text" placeholder="Введите ваше ФИО" />
          <BaseButton>Подтвердить</BaseButton>
        </div>
      </div>
    ),
  },
}
