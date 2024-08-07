import { styled } from '@mui/material/styles'

export const FooterWrapper = styled('footer')(({ theme }) => ({
  backgroundColor: theme?.palette?.backgroundCustom?.primaryElevated,
  borderRadius: '32px',
  marginBottom: '12px',
  padding: '0',
  color: theme?.palette?.text?.secondary,
  [theme?.breakpoints?.up?.('sm')]: {
    padding: '0 40px',
    borderRadius: '48px 48px 0 0',
    marginBottom: '0',
  },
  [theme?.breakpoints?.up?.('lg')]: {
    padding: '0 64px',
    borderRadius: '48px 48px 0 0',
  },
}))

export const Heading = styled('span')(({ theme }) => ({
  ...theme.typography.h4_Comp,
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.p3_Medium,
  },
  [theme.breakpoints.up('lg')]: {
    ...theme.typography.h4_Comp,
  },
}))

export const Address = styled('span')(({ theme }) => ({
  ...theme.typography.p3_Regular_Text,
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.p4_Regular_Comp,
  },
  [theme.breakpoints.up('lg')]: {
    ...theme.typography.p3_Regular_Text,
  },
}))

export const Top = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '24px 0 36px',
  gap: '32px',
  flexDirection: 'column',
  [theme?.breakpoints?.up?.('sm')]: {
    flexDirection: 'row',
  },
  [theme?.breakpoints?.up?.('md')]: {
    display: 'flex',
    padding: '64px 0 36px',
  },
}))

export const Center = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 0 24px',
  [theme?.breakpoints?.up?.('sm')]: {
    padding: '40px 0 24px',
  },
}))

export const AddressWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  width: 'fit-content',
  color: theme?.palette?.text?.primary,
  [theme?.breakpoints?.up?.('sm')]: {
    width: '402px',
  },
}))

export const ContactsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  rowGap: '16px',
  columnGap: '44px',
  [theme?.breakpoints?.up?.('sm')]: {
    minWidth: '268px',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridTemplateColumns: '1fr',
  },
  [theme?.breakpoints?.up?.('md')]: {
    width: 'fit-content',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    paddingRight: '146px',
  },
}))

export const DocumentsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0',
  padding: '0',
  rowGap: '16px',
  columnGap: '12px',
  flexWrap: 'wrap',
  listStyle: 'none',
  width: 'fit-content',
  maxWidth: '527px',
  [theme?.breakpoints?.up?.('sm')]: {
    flexDirection: 'row',
    columnGap: '12px',
  },
  [theme?.breakpoints?.up?.('md')]: {
    flexDirection: 'row',
    columnGap: '24px',
  },
}))

export const StyledLink = styled('a')(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  ...theme?.typography?.p3_Comp,
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.p4_Regular_Comp,
  },
  [theme.breakpoints.up('lg')]: {
    ...theme.typography.p3_Regular_Text,
  },
}))

export const ContactTextWrapper = styled('span')(({ theme }) => ({
  ...theme.typography.p3_Comp,
  [theme.breakpoints.up('sm')]: {
    ...theme.typography.p4_Regular_Comp,
  },
  [theme.breakpoints.up('lg')]: {
    ...theme.typography.p3_Regular_Text,
  },
  display: 'flex',
  flexDirection: 'row',
  gap: '2px',
}))
