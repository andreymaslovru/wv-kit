import { keyframes, styled } from '@mui/material'

export const ShakingAnimation = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
`

export const BaseSelectWrapper = styled('div')<{ isErrored?: boolean }>(({ isErrored }) => ({
  width: '100%',
  background: 'transparent',
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  animation: isErrored ? `${ShakingAnimation} 0.5s` : 'none',
}))

export const SelectLabel = styled('span')<{ isErrored?: boolean }>(({ theme, isErrored }) => ({
  ...theme.typography.p4_Regular_Comp,
  color: !isErrored ? theme.palette.text.secondary : theme.palette.accent?.negative,
}))

export const ErrorText = styled('span')(({ theme }) => ({
  ...theme.typography.p4_Regular_Comp,
  color: theme.palette.accent?.negative,
}))
