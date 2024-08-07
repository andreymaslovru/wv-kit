import React, { FC, ReactNode } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

import { Icon } from '@atoms'

import { BaseCardWrapper, Heading } from './styles'

export interface BaseInfoCardProps {
  header: ReactNode,
  icon: {
    src: StaticImport | string
    alt: string
  } | string,
  cursorPointer?: ReactNode,
  withTransform?: boolean,
  onClick?: () => void,
}

export const BaseInfoCard: FC<BaseInfoCardProps> = ({
  header,
  cursorPointer, 
  icon, 
  withTransform, 
  onClick,
}) => (
  <BaseCardWrapper sx={{ cursor: cursorPointer || withTransform ? 'pointer' : 'auto' }} onClick={onClick} withtransform={withTransform}>
    {typeof icon !== 'string'
      ? <Icon {...icon} />
      : <Image style={{ borderRadius: '16px' }} src={icon} alt="Country" width={52} height={52} />}
    <Heading withtransform={withTransform}>{header}</Heading>
  </BaseCardWrapper>
)
