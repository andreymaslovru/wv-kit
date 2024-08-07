import { styled } from '@mui/material'

export const Header = styled('h4')(({ theme }) => ({
  ...theme?.typography?.h4,
  margin: 0,
}))

export const Description = styled('span')(({ theme }) => ({
  ...theme?.typography?.p4_Regular_Comp,
  color: theme?.palette?.text?.secondary,
  textAlign: 'center',
  margin: 0,
  marginBottom: '12px',
}))
