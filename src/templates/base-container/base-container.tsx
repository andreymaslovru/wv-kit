'use client'

import { Container, ContainerProps, styled } from '@mui/material'
import React, { FC } from 'react'

const CustomizedContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '32px 20px 20px 20px',
  width: '100%',
  borderRadius: '32px',
  backgroundColor: theme?.palette?.backgroundCustom?.primaryElevated,
  [`@media (min-width: ${theme?.breakpoints?.values?.sm}px)`]: {
    padding: '40px',
    borderRadius: '48px',
    gap: '32px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values?.lg}px)`]: {
    padding: '64px',
    gap: '48px',
    maxWidth: 'none',
  },
}))

export const BaseContainer: FC<ContainerProps> = ({ children, sx }) => (
  <CustomizedContainer sx={sx}>
    {children}
  </CustomizedContainer>
)
