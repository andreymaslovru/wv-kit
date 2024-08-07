import { styled } from '@mui/material/styles'

interface MeterBarProps {
  value: number,
  max: number,
}

export const MeterContainer = styled('div')(({ theme }) => ({
  width: '82px',
  height: '4px',
  backgroundColor: theme.palette.backgroundCustom.stroke,
  borderRadius: '4px',
}))

export const MeterBar = styled('div')<MeterBarProps>(({ value, max, theme }) => ({
  width: `${(82 / max) * value}px`,
  height: '100%',
  boxSizing: 'border-box',
  backgroundColor: theme.palette.constant.apple.normal,
  borderRadius: '4px',
}))
