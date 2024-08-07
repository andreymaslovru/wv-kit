'use client'

import React, { FC, ReactNode } from 'react'
import {
  SxProps, Typography, useMediaQuery, useTheme
} from '@mui/material'

import {
  FilterItemsWrapper, Size, StyledImage, ImageWrapper
} from './styles'

export interface FilterItemProps {
  label: string
  size: keyof typeof Size
  selected?: boolean
  handleClick: () => void
  icon?: string | ReactNode
  sx?: SxProps
}

export const FilterItem: FC<FilterItemProps> = ({
  selected, size, label, icon, handleClick, sx,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints?.down?.('sm'))

  const typographyVariant = (size === 'xl' || (size === 'lg' && isMobile)) ? 'p4_Regular_Comp' : 'p4_Medium'

  return (
    <FilterItemsWrapper
      isSelected={selected}
      sx={sx}
      size={size}
      onClick={handleClick}
    >
      {icon && (typeof icon === 'string'
        ? (
          <ImageWrapper>
            <StyledImage style={{ borderRadius: '8px' }} src={icon} alt="изображение фильтра" aria-hidden="true" aria-labelledby={label} />
          </ImageWrapper>
        )
        : <ImageWrapper>{icon}</ImageWrapper>)}
      <Typography variant={typographyVariant}>{label}</Typography>
    </FilterItemsWrapper>
  )
}
