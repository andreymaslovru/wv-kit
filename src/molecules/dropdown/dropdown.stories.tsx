import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Dropdown } from './dropdown'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
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

type Story = StoryObj<typeof Dropdown>;

export const baseDropdownStory: Story = {
  name: 'baseDropdown',
  args: {
    options: [
      {NONE : 'Не выбран'},
      {MALE: 'Мужской'},
      {FEMALE: 'Женский'},
    ],
    label: 'Пол',
    placeholder: 'Укажите пол',
    onClick: (value: string) => console.log(value),
  },
}

export const helperTextDropdownStory: Story = {
  name: 'DropdownWithHelpertext',
  args: {
    options: [
      {NONE : 'Не выбран'},
      {MALE: 'Мужской'},
      {FEMALE: 'Женский'},
    ],
    label: 'Пол',
    helperText: 'Выберите пол',
    placeholder: 'Укажите пол',
    onClick: (value: string) => console.log(value),
  },
}

export const ErroredDropdownStory: Story = {
  name: 'ErroredDropdown',
  args: {
    options: [
      {NONE : 'Не выбран'},
      {MALE: 'Мужской'},
      {FEMALE: 'Женский'},
    ],
    label: 'Пол',
    error: 'Пол не выбран',
    placeholder: 'Укажите пол',
    onClick: (value: string) => console.log(value),
  },
}
