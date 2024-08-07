import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'

type Props = { withtransform?: boolean }

/** withTransform изменяет вид карточек компонента PopularCountries */
export const BaseCardWrapper = styled(Card)<Props>(({
  theme, withtransform,
}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: withtransform ? '24px' : '16px',
  [theme.breakpoints.up('xs')]: {
    gap: withtransform ? '12px' : '4px',
  },
  [theme.breakpoints.up('sm')]: {
    gap: withtransform ? '4px' : '4px',
  },
  [theme.breakpoints.up('lg')]: {
    gap: withtransform ? '24px' : '16px',
  },
  backgroundColor: withtransform
    ? theme.palette.backgroundCustom?.secondary
    : theme.palette.backgroundCustom.lower,
  backgroundImage: 'none',
  borderRadius: !withtransform ? 0 : '24px',
  padding: !withtransform ? 0 : '20px',
  height: '100%',
  cursor: withtransform ? 'pointer' : 'default',
  transition: '0.2s',
  boxShadow: 'none',
  ':hover': {
    backgroundColor: theme.palette.backgroundCustom.stroke,
  },
  ':active': {
    transform: 'scale(0.96)',
  },
  [`@media (min-width: ${theme?.breakpoints?.values?.sm}px)`]: withtransform ? {
    padding: '32px',
    gap: '24px',
    borderRadius: withtransform ? '32px' : '48px',
    '>img': {
      width: '80px',
      height: '80px',
      borderRadius: '24px',
    },
  } : {
    background: theme?.palette?.backgroundCustom?.primaryElevated,
    minHeight: '128px',
    padding: '20px',
    borderRadius: '32px',
  },
  [`@media (min-width: ${theme?.breakpoints?.values?.md}px)`]: {
    padding: '32px',
    borderRadius: withtransform ? '32px' : '48px',
  },
}))

export const Heading = styled('span')<Props>(({ theme, withtransform }) => ({
  display: 'block',
  textAlign: 'center',
  wordBreak: 'keep-all',
  '@media (min-width: 0px)': withtransform ? {
    ...theme.typography.p4_Medium,
  } : {
    ...theme.typography.c1_Regular_Comp,
  },
  [`@media (min-width: ${theme?.breakpoints?.values?.sm}px)`]: withtransform && {
    ...theme?.typography?.h4_Comp,
  },
  [`@media (min-width: ${theme?.breakpoints?.values.md}px)`]: {
    ...theme.typography.h4_Comp,
  },
  [`@media (min-width: ${theme?.breakpoints?.values.lg}px)`]: !withtransform && {
    ...theme.typography.h3_Comp,
  },
}))
