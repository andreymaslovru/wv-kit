import { styled } from '@mui/material'

export const Header = styled('div')(() => ({
  display: 'flex',
  gap: '12px',
  height: '40px',
  width: 'fit-content',
}))

export const Logo = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '12px',
  height: '40px',
  width: '40px',
}))

export const Image = styled('img')(() => ({
  width: '40px',
  heigth: '40px',
  borderRadius: '12px',
}))

export const TextContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))
