import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AccordionItemProps, BaseAccordion } from './accordion'

const meta: Meta = {
  component: BaseAccordion,
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        background: '#000000',
      }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof BaseAccordion>;

const items: AccordionItemProps[] = [
  {
    summary: 'В какой валюте я могу отправить деньги?',
    desctiprion: 'Валюта зависит от страны и банка, в который вы хотите сделать перевод. Можно перевести деньги в рублях, долларах, евро и национальных валютах.',
  },
  {
    summary: 'Какие способы перевода доступны?',
    desctiprion: 'Перевести деньги можете по номеру телефона, карты, счёта и с получением наличными.',
  },
  {
    summary: 'В какие страны можно сделать перевод?',
    desctiprion: 'Можно перевести в Таиланд, Китай, ОАЭ, Португалию, Узбекистан, Сербию, Казахстан, Маврикий, Германию, Таджикистан, Италию, Францию, Латвию, Кыргызстан, Беларусь, Швейцарию, Израиль, Индонезию (Бали), Грузию, Бельгию и в другие страны Европы и СНГ.',
  },
]

export const BaseAccordionStory: Story = {
  name: 'BaseAccordion',
  args: {
    header: 'Вопросы и ответы',
    items,
  },
}
