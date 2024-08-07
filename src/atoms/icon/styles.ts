import { styled } from '@mui/material/styles'

export const IconWrapper = styled('div')(({ theme }) => ({
  width: '52px',
  height: '52px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.backgroundCustom?.primaryElevated,
  borderRadius: '15px',
  img: {
    width: '24px',
    height: '24px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
    width: '52px',
    height: '52px',
    backgroundColor: theme?.palette?.backgroundCustom?.secondary,
  },
  [theme.breakpoints.up('lg')]: {
    width: '60px',
    height: '60px',
    img: {
      width: '32px',
      height: '32px',
    },
  },
}))
