import { styled } from '@mui/material'

export const ToggleSwitch = styled('div')(({ theme }) => ({
  width: '56px',
  height: '32px',
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: theme.palette.backgroundCustom.stroke,
  transition: 'all 0.5s ease',
}))

export const SwitchThumb = styled('div')<{ checked?: boolean }>(({ theme, checked }) => ({
  width: '24px',
  height: '24px',
  position: 'absolute',
  top: '4px',
  marginLeft: checked ? '4px' : '28px',
  backgroundColor: theme.palette.backgroundCustom.primary,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  transition: 'all 0.5s ease',
}))
