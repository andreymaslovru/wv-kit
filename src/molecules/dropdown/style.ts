import { styled } from '@mui/material'

export const DropdownWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  margin: '12px 0',
  [`@media (min-width: ${theme?.breakpoints?.values?.sm}px)`]: {
    width: '100%',
  },
}))

export const CustomPaper = styled('div')(({ theme }) => ({
  overflowX: 'hidden',
  position: 'fixed',
  marginTop: '5px',
  border: `1px solid ${theme.palette.backgroundCustom.stroke}`,
  backgroundColor: theme.palette.backgroundCustom?.modal,
  pading: '8px 0',
  borderRadius: '16px',
  maxWidth: '80%',
  '>ul': {
    borderRadius: '16px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values?.lg}px)`]: {
    maxWidth: '420px',
    overflowY: 'hidden',
  },
}))

export const CustomPlaceholder = styled('div')(({ theme }) => ({
  ...theme.typography.p3_Regular_Text,
  display: 'block',
  position: 'absolute',
  top: '42px',
  left: '12px',
  color: theme.palette.text.secondary,
  zIndex: 500,
  pointerEvents: 'none',
  cursor: 'pointer',
}))
