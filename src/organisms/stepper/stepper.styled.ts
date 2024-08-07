import { styled } from '@mui/material/styles'

export const StepperWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '52px',
  width: '100%',
  position: 'sticky',
  [theme.breakpoints.up('lg')]: {
    width: '960px',
  },
  top: '0',
  zIndex: '1000',
  backgroundColor: theme.palette.backgroundCustom.lower,
}))

export const LeftContainer = styled('button')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  margin: '0',
  width: '32px',
  height: '32px',
  background: 'none',
  border: 'none',
  transform: 'scaleX(-1)',
  cursor: 'pointer',
  position: 'absolute',
  left: '20px',
  [theme.breakpoints.up('sm')]: {
    left: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    left: '0',
  },
}))

export const CenterContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0',
  gap: '4px',
  position: 'absolute',
  left: `calc(50% - ${82 / 2}px)`,
  ...theme.typography.p3_Medium,
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.h4_Comp,
  },
}))

export const RightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '20px',
  [theme.breakpoints.up('sm')]: {
    right: '40px',
  },
  [theme.breakpoints.up('lg')]: {
    right: '0',
  },
}))
