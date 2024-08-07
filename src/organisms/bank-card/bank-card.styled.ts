import { styled } from '@mui/material'

interface CardContainerProps {
  isProfitable?: boolean,
}

export const OutlineContainer = styled('div')<CardContainerProps>(({ theme, isProfitable }) => ({
  position: 'relative',
  cursor: 'pointer',
  justifySelf: 'center',
  width: '100%',
  minHeight: isProfitable ? '200px' : 'unset',
  maxWidth: '416px',
  zIndex: 1,
  '-webkit-tap-highlight-color': 'transparent',
  '::before': isProfitable ? {
    content: '""',
    display: 'block',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    position: 'absolute',
    borderRadius: '24px',
    zIndex: -1,
    backgroundColor: theme.palette.constant.blueberry.dark,
  } : {},
  '::after': isProfitable ? {
    content: '"Минимальный курс"',
    ...theme.typography.c1_Regular_Comp,
    position: 'absolute',
    bottom: '2px',
    width: '100%',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.constant.greyscale[0],
  } : {},
}))

export const ContentContainer = styled('div')<CardContainerProps>(({ theme, isProfitable }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  gap: '8px',
  borderRadius: isProfitable ? '22px' : '24px',
  backgroundColor: isProfitable
    ? theme.palette.backgroundCustom.modal
    : theme.palette.backgroundCustom.secondary,
  width: isProfitable ? 'calc(100% - 4px)' : '100%',
  maxWidth: '416px',
  padding: isProfitable ? '20px 20px 12px' : '32px 20px 24px',
  margin: isProfitable ? '2px 2px' : 'unset',
  transition: 'filter 0.15s ease, opacity 0.15s ease',
  '> div.choose': {
    ...theme.typography.c2_Bold,
    backgroundColor: theme.palette.backgroundCustom.secondary,
    padding: '10px 12px',
    borderRadius: '12px',
    opacity: 0,
    position: 'absolute',
    right: '20px',
    top: '20px',
    transition: 'all 0.15s ease',
  },
  ':hover': {
    '> div.choose': {
      opacity: 1,
    },
  },
  ':active': {
    filter: 'brightness(0.85)',
  },
}))
