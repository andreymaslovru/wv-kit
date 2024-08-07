import { keyframes } from '@mui/material'
import { styled } from '@mui/material/styles'

const FillBackground = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`

export const CarouselWrapper = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  minHeight: '296px',
  borderRadius: '32px',
  [`@media (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
    minHeight: '400px',
    width: '100%',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.xl}px)`]: {
    width: '100%',
  },
}))

export const SliderPagsWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  padding: '12px 20px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  zIndex: 3000,
  top: 0,
  left: 0,
  [`@media (min-width: ${theme?.breakpoints?.values.sm}px)`]: {
    width: '100%',
    padding: '24px 20px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.md}px)`]: {
    width: '100%',
    padding: '24px 20px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.lg}px)`]: {
    width: '100%',
  },
  [`@media (min-width: ${theme?.breakpoints?.values.xl}px)`]: {
    padding: '24px 40px',
  },
}))

export const SliderPug = styled('div')<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: '100%',
  height: '4px',
  borderRadius: '5px',
  backgroundColor: `${theme.palette?.grey?.[100]}${!isActive ? 25 : ''}`,
}))

export const SliderPubAnimated = styled('span')<{ isAnimated: boolean, period: number }>(({ theme, isAnimated, period }) => ({
  display: 'block',
  width: '0%',
  position: 'relative',
  height: '4px',
  borderRadius: '5px',
  animation: isAnimated ? `${FillBackground} ${period}s` : 'none',
  backgroundColor: theme.palette?.grey?.[100],
}))

export const SlidesWrapper = styled('div')<{ slidesCount: number }>(({ slidesCount }) => ({
  position: 'relative',
  width: `calc(100%*${slidesCount})`,
  display: 'flex',
  gap: '1px',
}))

export const NavigationWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  position: 'absolute',
  bottom: 20,
  right: 20,
  [`@media (min-width: ${theme?.breakpoints?.values?.lg}px)`]: {
    bottom: 32,
    right: 40,
  },

}))

export const buttonStyles = {
  minWidth: '44px',
  height: '44px',
  borderRadius: '50%',
  span: {
    margin: 0,
  },
}
