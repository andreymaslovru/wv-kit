'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import { Skeleton } from '@mui/material'

import Arrow from '@public/assets/icons/SelectIcon.svg'

import {
  Select,
  SelectSubtitle,
  SelectTextWrapper,
  SelectTitle
} from './styles'

export interface SelectItemProps {
  icon?: string
  title?: string
  subtitle?: string
  isLoading?: boolean
  noEndIcon?: boolean
  onClick?: () => void
}

export const SelectItem: FC<SelectItemProps> = ({
  icon, title, subtitle, noEndIcon, onClick, isLoading,
}) => (
  <>
    {
        isLoading
          ? (
            <Select isLoading={isLoading}>
              <Skeleton height={52} variant="rounded" />
              <Skeleton />
            </Select>
          )
          : (
            <Select noBg={noEndIcon} onClick={() => onClick?.()}>
              {icon && <Image src={icon} alt={`Флаг страны ${title}`} width={52} height={52} />}
              <SelectTextWrapper>
                {title && <SelectTitle>{title}</SelectTitle>}
                {subtitle && <SelectSubtitle>{subtitle}</SelectSubtitle>}
              </SelectTextWrapper>
              {!noEndIcon && <Image src={Arrow} alt="иконка выпадающего меню" width={24} height={24} />}
            </Select>
          )
    }
  </>

)
