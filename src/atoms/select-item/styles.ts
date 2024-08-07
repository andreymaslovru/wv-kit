import { styled } from '@mui/material'

export const Select = styled('div')<{ isLoading?: boolean, noBg?: boolean }>(({ theme, isLoading, noBg }) => ({
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
  padding: noBg ? '10px 12px' : '10px 12px',
  background: noBg ? 'transparent' : theme.palette.backgroundCustom?.secondary,
  borderRadius: '20px',
  cursor: 'pointer',
  display: 'grid',
  gridTemplateColumns: isLoading ? '52px 1fr' : '52px 1fr 24px',
  gridAutoFlow: 'column',
  gap: '12px',
  [theme.breakpoints.up('lg')]: {
    padding: noBg ? '10px 12px' : '10px 12px',
  },
  '&:hover': {
    background: noBg && theme.palette.backgroundCustom?.secondary,
  },
  '> img': {
    '&:first-of-type': {
      borderRadius: '16px',
      width: '52px',
      height: '52px',
    },
  },
}))

export const SelectTextWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '155px',
  [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
    minWidth: '195px',
  },
}))

export const SelectTitle = styled('span')(({ theme }) => ({
  ...theme.typography.p3_Regular_Text,
  textAlign: 'start',
}))

export const SelectSubtitle = styled('span')(({ theme }) => ({
  ...theme.typography.p4_Regular_Comp,
  color: theme.palette.text?.secondary,
  textAlign: 'start',
}))
