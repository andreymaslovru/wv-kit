'use client'

import React, { FC } from 'react'
import { Typography } from '@mui/material'

import {
  Header, Logo, Image, TextContainer,
} from './bank-header.styled'

interface BankHeaderProps {
  imageSrc: string,
  bankName: string,
  paymentMethod: string,
}

export const BankHeader: FC<BankHeaderProps> = ({
  imageSrc, bankName, paymentMethod,
}) => (
  <Header>
    <Logo>
      <Image src={imageSrc} />
    </Logo>
    <TextContainer>
      <Typography color="text.primary" variant="p3_Medium">{bankName}</Typography>
      <Typography color="text.secondary" variant="c1_Regular_Comp">{paymentMethod}</Typography>
    </TextContainer>
  </Header>
)
