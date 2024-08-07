import { styled } from '@mui/material/styles'

export const ModalContainer = styled('div')<{ isCustomPaddings?: boolean }>(({ theme, isCustomPaddings }) => ({
  background: theme?.palette?.backgroundCustom?.primary,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: '32px 32px 0 0',
  zIndex: 5000,
  padding: isCustomPaddings ? '0' : '20px 20px 0',
  [theme.breakpoints.up('sm')]: {
    width: '560px',
    position: 'fixed',
    top: '50%',
    gap: '16px',
    bottom: 'unset',
    left: '50%',
    right: 'unset',
    transform: 'translateY(-50%) translateX(-50%) !important',
    padding: isCustomPaddings ? '0' : '24px 48px 48px',
    borderRadius: '48px',
  },
}))

export const CustomModalRoot = styled('div')(({ theme }) => ({
  background: theme?.palette?.backgroundCustom?.overlay,
  backdropFilter: 'blur(5px)',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  top: 0,
  zIndex: 4000,
}))

export const Divider = styled('div')(({ theme }) => ({
  width: 134,
  height: 5,
  borderRadius: 32,
  background: theme?.palette?.backgroundCustom?.inverted,
  margin: '21px auto 8px',
  [`@media (min-width: ${theme?.breakpoints?.values?.sm}px)`]: {
    display: 'none',
  },
}))

export const Grid = styled('div')<{ withSubheader?: boolean, isCustomPaddings?: boolean }>(({ withSubheader, isCustomPaddings, theme }) => ({
  display: 'grid',
  gridTemplateRows: withSubheader ? '1fr 20px' : 'auto',
  gridTemplateColumns: '1fr 32px',
  gridGap: '4px',
  gridAutoFlow: 'column dense',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0 20px',
  padding: isCustomPaddings ? '20px 20px 0' : 'unset',
  h4: {
    minHeight: '30px',
  },
  [theme.breakpoints.up('sm')]: {
    padding: isCustomPaddings ? '24px 48px 0' : 'unset',
    margin: withSubheader ? '20px 0' : '24px 0',
  },
}))

export const Heading = styled('h4')(({ theme }) => ({
  ...theme?.typography?.h4,
  display: 'block',
  margin: 0,
  minHeight: '32px',
  [`@media (min-width: ${theme?.breakpoints?.values?.sm}px)`]: {
    ...theme?.typography?.h2,
  },
}))

export const Subheading = styled('p')(({ theme }) => ({
  ...theme?.typography?.p4_Regular_Comp,
  color: theme?.palette?.text?.secondary,
  margin: 0,
  padding: 0,
  height: '20px',
}))

export const Description = styled('span')(({ theme }) => ({
  ...theme?.typography?.p3_Regular_Text,
  color: theme?.palette?.text?.secondary,
  display: 'block',
  wordBreak: 'break-word',
  padding: '4px 0',
  [theme.breakpoints.up('sm')]: {
    ...theme?.typography?.p3_Comp,
    color: theme?.palette?.text?.primary,
    padding: '0',
    marginBottom: '16px',
  },
}))
