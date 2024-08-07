import { Meta, StoryObj } from '@storybook/react'

import bg from '@public/background.png'

import { CarouselItem, SlideProps } from '@molecules'

const meta: Meta = {
  component: CarouselItem,
}

export default meta

type Story = StoryObj<typeof CarouselItem>;

const slide: SlideProps = {
  title: 'Международные переводы',
  background: bg,
  subtitle: 'Быстро, надежно, без границ',
  current: 1,
  action: {
    title: 'перевести за рубеж',
    variant: 'primary',
    onClick: () => window.open('https://payment.mts.ru/spa/transfer/abroad', '_blank')?.focus(),
  },
}

export const CarouselItemStory: Story = {
  name: 'CarouselItem',
  args: {
    ...slide,
    current: 0,
  },
}
