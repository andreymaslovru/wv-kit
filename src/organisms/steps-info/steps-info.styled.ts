import { styled } from '@mui/material/styles'

export const Circle = styled('div')(({ theme }) => ({
  ...theme.typography.p4_bold_upp_wide,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '24px',
  width: '24px',
  borderRadius: '50%',
  backgroundColor: theme.palette.accent.activeInverted,
}))

export const Title = styled('li')(({ theme }) => ({
  ...theme.typography.p4_Regular_Comp,
  display: 'flex',
  padding: '12px 0',
  gap: '12px',
}))

export const StepsInfoContainer = styled('ol')(() => ({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  margin: '0',
  padding: '0',
}))
