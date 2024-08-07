import { styled } from '@mui/material/styles'

export const HeaderWrapper = styled('div')<{ isFixed?: boolean, isHomePage?: boolean }>(({ isFixed, isHomePage, theme }) => ({
  position: isFixed ? 'fixed' : 'relative',
  width: '100%',
  backgroundColor: theme?.palette?.backgroundCustom?.lower,
  display: 'flex',
  padding: '10px 0',
  alignItems: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    padding: '34px 0 34px 0',
    position: 'relative',
    ':after': {
      display: 'none',
    },
  },
  ':after': !isHomePage ? {
    content: '""',
    width: '100%',
    height: '1px',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.backgroundCustom.stroke,
  } : {},
}))

export const Flex = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))
