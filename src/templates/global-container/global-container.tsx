'use client'

import React, { FC, PropsWithChildren } from 'react'
import { SxProps, Theme } from '@mui/material'

import { Container, Wrapper } from './styles'

interface GlobalContainerProps extends PropsWithChildren {
  withoutLineHeight?: boolean,
  withoutInnerPaddings?: boolean,
  sx?: SxProps<Theme>
}

export const GlobalContainer: FC<GlobalContainerProps> = ({
  children,
  withoutLineHeight,
  withoutInnerPaddings = false,
  sx,
}) => (
  <Container sx={sx} withoutLineHeight={withoutLineHeight}>
    <Wrapper isFullWidth={withoutInnerPaddings}>
      {children}
    </Wrapper>
  </Container>
)
