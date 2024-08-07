import {
  SxProps, styled, useMediaQuery, useTheme
} from '@mui/material'
import React, { useState, useEffect, FC } from 'react'

import { Divider } from '../modal/styles'

interface IProps {
  children: React.ReactElement
  sx?: SxProps
}

export const StickyButton: FC<IProps> = ({ children, sx }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints?.down?.('sm'))
  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    const payElement = document.getElementById('pay')

    if (!payElement) return

    const payElementTop = payElement.getBoundingClientRect().top + 72
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    if (payElementTop <= windowHeight) {
      setSticky(false)
    } else {
      setSticky(true)
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
    } else {
      setSticky(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  if (!isSticky) {
    return null
  }

  return (
    <WrapperStickyButton sx={sx} id="sticky-component">

      {children}

      <Divider sx={{
        display: 'block',
        position: 'absolute',
        bottom: '8px !important',
        left: '50% !important',
        transform: 'translateX(-50%) !important',
      }}
      />

    </WrapperStickyButton>
  )
}

export const SubmitButtonWrapper = styled('div')(({ theme }) => ({
  minHeight: '114px',
  padding: '16px 20px',
  width: '100%',
  backgroundColor: theme?.palette?.backgroundCustom?.primaryElevated,
  borderRadius: '32px 32px 0 0',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  bottom: 0,
  left: 0,
}))

const WrapperStickyButton = styled('div')(({ theme }) => ({
  position: 'fixed',
  zIndex: 1001,
  display: 'flex',
  flexDirection: 'column',
  bottom: 0,
  left: 0,
  width: '100%',
  minHeight: '114px',
  padding: '16px 20px',
  backgroundColor: theme?.palette?.backgroundCustom?.primaryElevated,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '32px 32px 0 0',
  span: {
    marginBottom: '24px',
  },
}))
