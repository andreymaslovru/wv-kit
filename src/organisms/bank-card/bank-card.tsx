'use client'

import React, { ReactNode, FC } from 'react'

import { BankHeader } from '@atoms'
import { ListMapper } from '@templates'

import { ContentContainer, OutlineContainer } from './bank-card.styled'

export const constants: BankCardProps = {
  imageSrc: '/assets/bank-logos/Davrbank.svg',
  bankName: 'Davr bank',
  paymentMethod: 'По номеру телефона',
  listParams: [
    { title: 'Курс', content: '1 UZS = 0,0077 RUB' },
    { title: 'Комиссия', content: '0 RUB' },
    { title: 'Итого к оплате', content: '15 400 RUB' },
  ],
  isProfitable: false,
}

type listParamsProps = {
  title: string,
  content: string | ReactNode,
}

export interface BankCardProps {
  imageSrc: string,
  bankName: string,
  paymentMethod: string,
  listParams?: Array<listParamsProps>,
  isProfitable?: boolean,
  onClick?: () => void,
}

export const BankCard: FC<BankCardProps> = ({
  imageSrc, bankName, paymentMethod, listParams, isProfitable, onClick,
}) => (
  <OutlineContainer isProfitable={isProfitable} onClick={onClick}>
    <ContentContainer isProfitable={isProfitable}>
      <BankHeader imageSrc={imageSrc} bankName={bankName} paymentMethod={paymentMethod} />
      {listParams && (
      <ListMapper
        isDivider
        isHorizontal
        list={listParams}
        titleFontVariant="p4_Medium"
        contentFontVariant="p4_Medium"
      />
      )}
      <div className="choose">
        ВЫБРАТЬ
      </div>
    </ContentContainer>
  </OutlineContainer>
)
