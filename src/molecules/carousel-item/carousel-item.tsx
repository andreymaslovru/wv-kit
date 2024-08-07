import { ButtonOwnProps, useTheme } from '@mui/material'
import { StaticImageData } from 'next/dist/shared/lib/get-img-props'
import React, { FC, ReactNode } from 'react'
import Image from 'next/image'

import { BaseButton } from '@atoms'

import { BaseSlide, SliderHeading, SliderDescription } from './styles'

export interface SlideProps {
  title: string
  background: StaticImageData | string,
  current: number
  action: {
    title: string
    onClick: () => void
    variant: ButtonOwnProps['variant']
  },
  animation?: ReactNode
  subtitle?: string
}

export const CarouselItem: FC<SlideProps> = ({
  title, background, subtitle, action, current, animation,
}) => {
  const theme = useTheme()

  return (
    <BaseSlide
      sx={{
        transform: `translateX(calc(-100% * ${current}))`,
        transition: '0.5s',
      }}
    >
      {typeof background === 'string'
        ? (
          <div style={{
            background, width: '100%', height: '100%', position: 'absolute', top: '0', left: '0', zIndex: -1000,
          }}
          />
        )
        : (
          <Image
            src={background}
            alt="Картинка слайдера"
          />
        )}
      {animation && animation}
      <div>
        <SliderHeading>{title}</SliderHeading>
        <SliderDescription>{subtitle}</SliderDescription>
      </div>
      <div style={{ width: '100%', height: 'auto', padding: '0 20px' }}>
        <BaseButton
          size="large"
          variant={action.variant}
          sx={{
            width: '100%',
            margin: '16px auto',
            padding: '14px 22px',
            letterSpacing: '5%',
            zIndex: 2000,
            [theme.breakpoints.up('sm')]: {
              width: 'fit-content',
              margin: '24px 4px',
            },
            [theme.breakpoints.up('lg')]: {
              margin: '32px 20px',
            },
          }}
          onClick={action.onClick}
        >
          {action.title}
        </BaseButton>
      </div>
    </BaseSlide>
  )
}
