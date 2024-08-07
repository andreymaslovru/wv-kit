import { styled } from '@mui/material/styles'

export enum ListMapperSizes {
  Small = 'Small',
  Normal = 'Normal',
}

interface ContainerItemProps {
  isDivider?: boolean,
  isHorizontal?: boolean,
  size?: ListMapperSizes,
}

export const Container = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0',
  padding: '0',
}))

const getItemPadding = (size?: ListMapperSizes, isHorizontal?: boolean) => {
  if (size === ListMapperSizes.Normal) {
    return '12px 0'
  } if (size === ListMapperSizes.Small) {
    return '3px 0'
  } if (isHorizontal) {
    return '6px 0'
  }
}

export const ContainerItem = styled('li')<ContainerItemProps>(({
  theme, isDivider, isHorizontal, size,
}) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: isHorizontal ? 'row' : 'column',
  justifyContent: isHorizontal ? 'space-between' : 'none',
  margin: '0',
  padding: getItemPadding(size, isHorizontal),
  ':not(:lastChild)::after': isDivider ? {
    content: "''",
    height: '1px',
    width: '100%',
    background: theme.palette.backgroundCustom.stroke,
    position: 'absolute',
    bottom: '0',
  } : 'none',
}))
