import { styled } from '@mui/material'

export const VideoBackground = styled('div')(() => ({
  position: 'absolute',
  right: '0',
  bottom: '0',
  zIndex: 0,
  height: '100%',
  width: 'auto',
  overflow: 'hidden',
  '> video': {
    height: '100%',
  },
}))
