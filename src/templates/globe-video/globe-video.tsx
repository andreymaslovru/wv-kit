import React, {
  FC, useCallback, useEffect, useState
} from 'react'
import { Theme, useMediaQuery } from '@mui/material'
import { useThemeContext } from '@theme'
import { VideoAnimation } from '@atoms'


const globeVideo = {
  src: '/assets/background/',
  light: {
    mobile: 'globe-mobile-light.mp4',
    tablet: 'globe-tablet-light.mp4',
    desktop: 'globe-desktop-light.mp4',
  },
  dark: {
    mobile: 'globe-mobile-dark.mp4',
    tablet: 'globe-tablet-dark.mp4',
    desktop: 'globe-desktop-dark.mp4',
  },
}

export const GlobeVideo: FC = () => {
  const { mode } = useThemeContext()

  const isMobile = useMediaQuery<Theme>(
    (theme) => theme.breakpoints
      .between(0, theme.breakpoints.values.xs + 1)
  )
  const isTablet = useMediaQuery<Theme>(
    (theme) => theme.breakpoints
      .between(theme.breakpoints.values.xs, theme.breakpoints.values.sm + 1)
  )

  const resolution = useCallback(() => {
    if (isMobile) {
      return 'mobile'
    } if (isTablet) {
      return 'tablet'
    }

    return 'desktop'
  }, [isMobile, isTablet])

  const [path, setPath] = useState(globeVideo.src + globeVideo[mode][resolution()])

  useEffect(() => {
    setPath(globeVideo.src + globeVideo[mode][resolution()])
  }, [resolution, mode, isMobile, isTablet])

  return (
    <VideoAnimation src={path} key={path} />
  )
}
