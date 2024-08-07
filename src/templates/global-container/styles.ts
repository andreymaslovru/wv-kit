import { styled } from '@mui/material'

export const Container = styled('div')<{ withoutLineHeight?: boolean }>(({ withoutLineHeight }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: withoutLineHeight ? '0px' : undefined,
}))

export const Wrapper = styled('div')<{ isFullWidth: boolean }>(({ theme, isFullWidth }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  [theme.breakpoints.up('sm')]: {
    width: isFullWidth ? '100%' : '90%',
    margin: isFullWidth ? 'unset' : '0 40px',
    gap: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1552px',
    width: '90%',
    gap: '64px',
  },
  [theme.breakpoints.up(1920)]: {
    width: '1552px',
  },
}))
