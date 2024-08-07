import { Meta, StoryObj } from '@storybook/react'

import bg from '@public/background/bg.jpg'
import back from '@public/background/bg1.jpg' 

import { SlideProps } from '@molecules'

import { BaseCarousel } from './base-carousel'

const meta: Meta = {
  component: BaseCarousel,
}

export default meta

type Story = StoryObj<typeof BaseCarousel>;

const slides: Omit<SlideProps, 'current'>[] = [
  {
    title: 'Международные переводы',
    background: bg,
    subtitle: 'Быстро, надежно, без границ',
    action: {
      title: 'перевести за рубеж',
      variant: 'primary',
      onClick: () => window.open('https://payment.mts.ru/spa/transfer/abroad', '_blank')?.focus(),
    },
  },
  {
    title: 'Игровая витрина',
    background: back,
    subtitle: 'Пополняй различные игры  и сервисы',
    action: {
      title: 'подробнее',
      variant: 'primary',
      onClick: () => window.open('https://payment.mts.ru/cyber', '_blank')?.focus(),
    },
  },
  {
    title: 'Подписки на зарубежные сервисы',
    background: bg,
    subtitle: 'В одном приложении МТС Музыка для любого настроения',
    action: {
      title: 'подробнее',
      variant: 'primary',
      onClick: () => window.open('https://premium.mts.ru/', '_blank')?.focus(),
    },
  },
]

export const BaseCarouselStory: Story = {
  name: 'BaseCarousel',
  args: {
    period: 5,
    slides,
  },
}
