'use client'

import React, { FC } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

import { useThemeContext, ThemeMode } from '@theme'

import { GlobalContainer, GlobalWrapper } from '@templates'
import { MultitransferLogo } from '@atoms'

import { HeaderWrapper, Flex } from './styled'
import { ButtonToggleTheme } from '../../features/button-toggle-theme'

interface HeaderProps {
  isFixed?: boolean,
  isHomePage?: boolean
}

export const Header: FC<HeaderProps> = ({ isFixed, isHomePage }) => {
  const { mode } = useThemeContext()
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <HeaderWrapper isFixed={isFixed} isHomePage={isHomePage}>
      <GlobalContainer withoutLineHeight>
        <GlobalWrapper>
          <Flex>
            <a href="/">
              <MultitransferLogo
                fill={mode === ThemeMode.DARK ? 'white' : 'black'}
                aria-label="Логотип Мультитрансфер"
                style={{
                  height: isTablet ? '44px' : '32px',
                }}
              />
            </a>
            <ButtonToggleTheme />
          </Flex>
        </GlobalWrapper>
      </GlobalContainer>
    </HeaderWrapper>
  )
}
