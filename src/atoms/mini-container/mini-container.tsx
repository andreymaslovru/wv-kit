'use client'

import { styled, Container as MuiContainer } from '@mui/material'
import React, { FC, ReactNode } from 'react'

export const MiniContainer: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => (
  <Container>{ children }</Container>
)

const Container = styled(MuiContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  padding: '20px',
  paddingBottom: '32px',
  background: theme?.palette?.backgroundCustom?.primaryElevated,
  width: '90%',
  margin: '0 auto',
  borderRadius: '32px',
  [`@media (min-width: ${theme?.breakpoints?.values?.xs}px)`]: {
    width: '100%',
    margin: 0,
  },
  [`@media (min-width: ${theme?.breakpoints?.values?.md}px)`]: {
    padding: '32px',
    borderRadius: '48px',
  },
}))
