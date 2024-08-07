'use client'

import React, { FC } from 'react'
import Image from 'next/image'

import Error from '@public/assets/result/error.png'
import Loading from '@public/assets/result/loading.png'
import Success from '@public/assets/result/success.png'

import { MiniContainer } from '../mini-container/mini-container'
import { Description, Header } from './styles'

export enum StatusText {
  success = 'Перевод отправлен',
  inProgress = 'Перевод в обработке',
  failed = 'Перевод не выполнен',
}

export interface StatusIconProps {
  status: keyof typeof StatusText,
  error?: string
}

export const StatusIcon: FC<StatusIconProps> = ({ status, error }) => {
  switch (status) {
    case 'inProgress':
      return (
        <MiniContainer>
          <Image src={Loading} alt="Изображение статуса" width={120} height={120} />
          <Header>{StatusText[status]}</Header>
        </MiniContainer>
      )
    case 'success':
      return (
        <MiniContainer>
          <Image src={Success} alt="Изображение статуса" width={120} height={120} />
          <Header>{StatusText[status]}</Header>
        </MiniContainer>
      )
    case 'failed':
      return (
        <MiniContainer>
          <Image src={Error} alt="Изображение статуса" width={120} height={120} />
          <Header>{StatusText[status]}</Header>
          {error && <Description>{error}</Description>}
        </MiniContainer>
      )
    default:
  }
}
