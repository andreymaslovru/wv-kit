import { styled } from '@mui/material'

export const TextFieldWrapper = styled('div')<{
  noMargin?: boolean,
  withHeight?: boolean
}>(({ noMargin, theme, withHeight }) => ({
  margin: noMargin ? '0' : '12px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'flex-start',
  [`@media (min-width: ${theme?.breakpoints?.values?.lg}px)`]: {
    height: withHeight && '104px',
  },
}))

export const CardIconsWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
}))

export const OptionalWrapper = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  borderRadius: '6px',
  backgroundColor: theme.palette.backgroundCustom.secondary,
  padding: '0 4px',
  display: 'block',
  ...theme.typography.c1_Medium,
}))
