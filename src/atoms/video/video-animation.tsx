import React, { FC } from 'react'

import { VideoBackground } from './styles'

interface VideoAnimationProps {
  src: string
}

export const VideoAnimation: FC<VideoAnimationProps> = ({ src }) => (
  <VideoBackground>
    <video autoPlay loop muted playsInline>
      <source src={src} type="video/mp4" />
    </video>
  </VideoBackground>
)
