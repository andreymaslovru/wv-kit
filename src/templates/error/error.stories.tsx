import type { Meta, StoryObj } from '@storybook/react'

import { Error, ErrorProps } from './error'

const meta: Meta<typeof Error> = {
  component: Error,
}

const constants: ErrorProps[] = [{
  icon: '/assets/result/data-fetch-error-gray.svg',
  title: 'Не удалось загрузить данные',
  subtitle: 'Повторите попытку позже',
},
{
  icon: '/assets/result/not-found-error-gray.svg',
  title: 'Ничего не найдено',
  subtitle: 'Измените запрос',
},
{
  icon: '/assets/result/error.png',
  title: 'Ошибка 404',
  subtitle: 'Нет такой страницы',
  size: 'Large',
}]

export default meta

type Story = StoryObj<typeof Error>;

export const DataFetchErrorStory: Story = {
  name: 'Data Fetch Error',
  args: {
    ...constants[0],
  },
}

export const NotFoundErrorStory: Story = {
  name: 'Not Found Error',
  args: {
    ...constants[1],
  },
}

export const Error404Story: Story = {
  name: '404 Error',
  args: {
    ...constants[2],
  },
}
