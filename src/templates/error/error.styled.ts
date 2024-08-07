import { Theme, styled } from '@mui/material/styles'

export enum ErrorSizes {
  Small = 'Small',
  Large = 'Large',
}

enum Breakpoints {
  Mobile = 'Mobile',
  Tablet = 'Tablet',
  Desktop = 'Desktop',
}

const getTitle = (theme: Theme, size: ErrorSizes, breakpoint: Breakpoints) => {
  switch (size) {
    case ErrorSizes.Small:
      if (breakpoint === Breakpoints.Desktop) {
        return {
          ...theme.typography.h4,
          paddingTop: '24px',
        }
      }
      if (breakpoint === Breakpoints.Tablet) {
        return {
          ...theme.typography.h3,
          paddingTop: '24px',
        }
      }
      if (breakpoint === Breakpoints.Mobile) {
        return {
          ...theme.typography.h4,
          paddingTop: '24px',
        }
      }
      break
    case ErrorSizes.Large:
      if (breakpoint === Breakpoints.Desktop) {
        return {
          ...theme.typography.h2,
          paddingTop: '32px',
        }
      }
      if (breakpoint === Breakpoints.Tablet) {
        return {
          ...theme.typography.h3,
          paddingTop: '32px',
        }
      }
      if (breakpoint === Breakpoints.Mobile) {
        return {
          ...theme.typography.h3,
          paddingTop: '32px',
        }
      }
      break
    default:
  }
}

const getSubtitle = (theme: Theme, size: keyof typeof ErrorSizes, breakpoint: Breakpoints) => {
  switch (size) {
    case ErrorSizes.Small:
      if (breakpoint === Breakpoints.Desktop) {
        return {
          ...theme.typography.p4_Regular_Comp,
          paddingTop: '8px',
        }
      }
      if (breakpoint === Breakpoints.Tablet) {
        return {
          ...theme.typography.p3_Regular_Text,
          paddingTop: '8px',
        }
      }
      if (breakpoint === Breakpoints.Mobile) {
        return {
          ...theme.typography.p4_Regular_Comp,
          paddingTop: '8px',
        }
      }
      break
    case ErrorSizes.Large:
      if (breakpoint === Breakpoints.Desktop) {
        return {
          ...theme.typography.p2_Regular_Comp,
          paddingTop: '12px',
        }
      }
      if (breakpoint === Breakpoints.Tablet) {
        return {
          ...theme.typography.p3_Regular_Text,
          paddingTop: '12px',
        }
      }
      if (breakpoint === Breakpoints.Mobile) {
        return {
          ...theme.typography.p3_Regular_Text,
          paddingTop: '12px',
        }
      }
      break
    default:
  }
}

export const ErrorContainer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '25px',
}))

interface StyledProps {
  size?: ErrorSizes,
}

export const StyledTitle = styled('span')<StyledProps>(({ theme, size = ErrorSizes.Small }) => ({
  ...getTitle(theme, size, Breakpoints.Mobile),
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    ...getTitle(theme, size, Breakpoints.Tablet),
  },
  [theme.breakpoints.up('lg')]: {
    ...getTitle(theme, size, Breakpoints.Desktop),
  },
}))

export const StyledSubtitle = styled('span')<StyledProps>(({ theme, size = ErrorSizes.Small }) => ({
  ...getSubtitle(theme, size, Breakpoints.Mobile),
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('sm')]: {
    ...getSubtitle(theme, size, Breakpoints.Tablet),
  },
  [theme.breakpoints.up('lg')]: {
    ...getSubtitle(theme, size, Breakpoints.Desktop),
  },
}))

export const Icon = styled('img')(() => ({
  width: '120px',
  height: '120px',
}))
