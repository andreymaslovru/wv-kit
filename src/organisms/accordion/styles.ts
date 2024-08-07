import { Theme, styled } from '@mui/material'

export enum AccordionSizes {
  Small = 'Small',
  Large = 'Large',
}

export const AccordionWrapper = styled('div')<{ size: AccordionSizes }>(({ theme, size }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '32px',
  width: '100%',
  borderRadius: '32px',
  backgroundColor: theme?.palette?.backgroundCustom?.primaryElevated,
  [`@media (min-width: ${theme?.breakpoints?.values?.md}px)`]: {
    borderRadius: '64px',
    padding: size === AccordionSizes.Large ? '64px' : '48px 64px 64px',
    '.MuiAccordion-root': {
      '&:last-child': {
        '.MuiAccordionSummary-root': {
          borderBottom: 'none',
        },
      },
    },
  },
}))

const getHeadingTypography = (size: AccordionSizes, theme: Theme) => {
  if (size === AccordionSizes.Large) {
    return {
      ...theme.typography.Promo2,
    }
  }

  return {
    ...theme.typography.h2,
  }
}

export const AccordionHeading = styled('h4')<{ size: AccordionSizes }>(({ theme, size }) => ({
  ...theme?.typography?.h4,
  margin: 0,
  [theme.breakpoints.up('sm')]: {
    ...theme?.typography?.h2,
    padding: 0,
  },
  [theme.breakpoints.up('lg')]: {
    ...getHeadingTypography(size, theme),
    textTransform: size === AccordionSizes.Large ? 'uppercase' : 'unset',
  },
}))
