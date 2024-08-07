'use client'

import React, { ReactNode, FC } from 'react'
import { SxProps, Typography, TypographyOwnProps } from '@mui/material'

import {
  ListMapperSizes,
  Container, ContainerItem
} from './list-mapper.styled'

export const constants: ListMapperProps['list'] = [
  { title: 'Курс', content: '1 UZS = 0,0077 RUB' },
  { title: 'Сумма отправления', content: '15 384,62 RUB' },
  { title: 'Сумма к получению', content: '2 000 000 UZS' },
  { title: 'Комиссия', content: '0 RUB' },
  { title: 'Итого к оплате', content: '15 384,62 RUB' },
]

type ItemProps = {
  title: string,
  content: ReactNode,
}

interface ListMapperProps {
  list: Array<ItemProps>,
  isDivider?: boolean,
  isHorizontal?: boolean,
  size?: keyof typeof ListMapperSizes,
  titleFontVariant?: TypographyOwnProps['variant'],
  contentFontVariant?: TypographyOwnProps['variant'],
  sx?: SxProps,
}

export const ListMapper: FC<ListMapperProps> = ({
  list, isDivider, isHorizontal, size, sx, titleFontVariant = 'p4_Regular_Comp', contentFontVariant = 'p3_Comp',
}) => (
  <Container sx={sx}>
    {list?.map((item, index) => (
      <ContainerItem
        key={index}
        isDivider={isDivider}
        isHorizontal={isHorizontal}
        size={size && ListMapperSizes[size]}
      >
        <Typography color="text.secondary" variant={titleFontVariant}>{item.title}</Typography>
        {typeof item.content === 'string' ? <Typography color="text.primary" variant={contentFontVariant}>{item.content}</Typography> : <div>{item.content}</div>}
      </ContainerItem>
    ))}
  </Container>
)
