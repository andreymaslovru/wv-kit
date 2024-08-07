'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { FC } from 'react'

import { IconWrapper } from './styles'

export interface IconProps {
  src: StaticImport | string
  alt: string

}

export const Icon:FC<IconProps> = ({
  src, alt,
}) => (
  <IconWrapper>
    <Image src={src} alt={alt} width={24} height={24} />
  </IconWrapper>
)
