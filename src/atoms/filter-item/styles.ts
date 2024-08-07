import { styled } from '@mui/material'

export enum Size {
  sm = '32px',
  md = '44px',
  lg = '52px',
  xl = '74px',
}
export enum FilterItemPadding {
  sm = '6px 10px',
  md = '10px 12px',
  lg = '12px 16px',
  xl = '12px 0',
}

export const FilterItemsWrapper = styled('div')<{
  size: keyof typeof Size,
  isSelected?: boolean }>(({ theme, size, isSelected }) => ({
  width: size === 'xl' ? '120px' : 'auto',
  color: isSelected
    ? theme.palette.backgroundCustom.primary
    : theme.palette.backgroundCustom.inverted,
  fill: isSelected
    ? theme.palette.backgroundCustom.primary
    : theme.palette.backgroundCustom.inverted,
  display: 'flex',
  flexDirection: size === 'xl' ? 'column' : 'row',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '6px',
  height: Size[size],
  padding: FilterItemPadding[size],
  borderRadius: '16px',
  backgroundColor: isSelected
    ? theme.palette.backgroundCustom.inverted
    : theme.palette.backgroundCustom.secondary,
  cursor: 'pointer',
  transition: '0.1s ease-in-out',
  ':hover': !isSelected && {
    backgroundColor: theme.palette.backgroundCustom.stroke,
  },
}))

export const StyledImage = styled('img')(() => ({
  width: 'auto',
  height: '100%',
}))

export const ImageWrapper = styled('div')(() => ({
  width: '24px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
