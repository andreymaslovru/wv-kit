import { styled } from '@mui/material/styles'

export const BaseSlide = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '296px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '> img': {
    scrollSnapAlign: 'start',
    position: 'fixed',
    width: '100%',
    height: '296px',
    borderRadius: '0 0 16px 16px',
    zIndex: 1000,
  },
  [`@media (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
    height: '400px',
    '> img': {
      width: '89vw',
      height: '400px',
      borderRadius: '16px',
    },
  },
  [`@media (min-width: ${theme?.breakpoints?.values.md}px)`]: {
    '>img': {
      width: '92.5vw',
    },
  },
  [`@media (min-width: ${theme?.breakpoints?.values.lg}px)`]: {
    height: '400px',
    '>img': {
      height: '400px',
      minWidth: '93.5vw',
    },
    '>button': {
      marginLeft: '40px',
      marginBottom: '32px',
    },
  },
  [`@media (min-width: ${theme?.breakpoints?.values.xl}px)`]: {
    '>img': {
      minWidth: '95.5vw',
    },
  },
}))

export const SliderHeading = styled('h1')(({ theme }) => ({
  ...theme.typography.h3,
  display: 'block',
  position: 'relative',
  color: theme.palette.grey[100],
  zIndex: 3000,
  margin: '16px 20px 8px',
  maxWidth: '90vw',
  [`@media (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
    ...theme.typography.Promo2,
    margin: '32px 25px 16px',
    maxWidth: '50vw',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.lg}px)`]: {
    ...theme.typography.Promo2,
    margin: '40px 40px 16px',
    maxWidth: '712px',
  },
}))

export const SliderDescription = styled('span')(({ theme }) => ({
  ...theme.typography.p4_Regular_Comp,
  display: 'block',
  position: 'relative',
  color: theme.palette.grey[100],
  zIndex: 3000,
  margin: '0 20px',
  width: '55%',
  [`@media (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
    ...theme.typography.p2_Regular_Comp,
    margin: '0 24px',
    maxWidth: '340px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.lg}px)`]: {
    ...theme.typography.p2_Regular_Comp,
    marginLeft: '40px',
    maxWidth: '656px',
  },
}))
