'use client'

import { styled } from '@mui/material/styles'
import React, { FC, PropsWithChildren } from 'react'

interface GlobalWrapperProps extends PropsWithChildren {}

export const GlobalWrapper: FC<GlobalWrapperProps> = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled('div')(({ theme }) => ({
  [theme?.breakpoints?.down?.('sm')]: {
    padding: '0 20px',
  },
}))
