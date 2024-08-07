'use client'

import React, { FC, ReactNode } from 'react'
import { Skeleton, SxProps, styled } from '@mui/material'

import { FilterItem, Size } from '@atoms'

export interface FilterItemGroupProps {
  size: keyof typeof Size,
  items?: GroupItemProps[],
  handleClick?: (value: string) => void,
}

type GroupItemProps = {
  label: string,
  value: string,
  selected?: boolean,
  icon?: ReactNode,
  sx?: SxProps,
}

export const FilterItemGroup: FC<FilterItemGroupProps> = ({ size, items, handleClick }) => (
  <ItemsContainer>
    {items
      ? items.map((item) => (
        <FilterItem
          key={`filter-item-${item.value}`}
          handleClick={() => handleClick?.(item.value)}
          size={size}
          selected={!!(item.selected)}
          {...item}
        />
      ))
      : Array.from(Array(4), (_, i) => <Skeleton key={`skeleton-${i}`} width={120} height={42} />)}
  </ItemsContainer>
)

export const ItemsContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
}))
