'use client'

import React, { BaseSyntheticEvent, FC, useEffect, useState } from 'react'
import {
  Theme, useMediaQuery, useTheme
} from '@mui/material'
import Image from 'next/image'

import Next from '@public/next.svg'

import { BaseButton } from '@atoms'
import { CarouselItem, SlideProps } from '@molecules'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import {
  CarouselWrapper,
  SliderPagsWrapper,
  SliderPubAnimated,
  SliderPug,
  SlidesWrapper,
  buttonStyles,
  NavigationWrapper
} from './styles'

export interface CarouselProps {
  slides: Omit<SlideProps, 'current'>[]
  period: number
}

const BtnImage = <Image src={Next as StaticImport} alt="иконка кнопки вперед/назад" width={8} height={16} />

export const BaseCarousel: FC<CarouselProps> = ({ slides, period }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState(period)

  const theme = useTheme()
  const isMobile = useMediaQuery<Theme>(theme?.breakpoints?.down('sm'))

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    }

    if (timeLeft === 0) {
      if (currentSlide + 1 < slides.length) {
        setCurrentSlide(currentSlide + 1)
      } else {
        setCurrentSlide(0)
      }

      timer = setInterval(() => {
        setTimeLeft(period)
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [currentSlide, period, timeLeft, slides.length])

  useEffect(() => {
    if (timeLeft === 0) {
      if (currentSlide + 1 < slides.length) {
        setCurrentSlide(currentSlide + 1)
      } else {
        setCurrentSlide(0)
      }

      setTimeLeft(period)
    }
  }, [timeLeft, currentSlide, period, slides.length])

  const handleMobNavigate = (TouchX: number) => {
    if (TouchX < window.innerWidth / 2) {
      setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1)
    } else {
      setCurrentSlide(currentSlide + 1 <= slides.length - 1 ? currentSlide + 1 : 0)
    }
  }

  const handleNavigate = (dir: 'next' | 'prev') => {
    switch (dir) {
      case 'next':
        setCurrentSlide(currentSlide + 1 <= slides.length - 1 ? currentSlide + 1 : 0)
        break
      case 'prev':
        setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : slides.length - 1)
        break
      default:
    }
  }

  return (
    <CarouselWrapper onClick={(e: React.MouseEvent<HTMLElement>) => isMobile && handleMobNavigate(e.pageX)}>
      {slides.length > 1 && (
      <SliderPagsWrapper>
        {slides.map((_, i) => (
          <SliderPug
            isActive={i < currentSlide}
            key={`slider-pug-${i}`}
          >
            <SliderPubAnimated period={period} isAnimated={i === currentSlide} />
          </SliderPug>
        ))}
      </SliderPagsWrapper>
      )}
      <SlidesWrapper slidesCount={slides.length}>
        {slides.map((slideItem, index) => (
          <CarouselItem
            key={`slide-item-${index}`}
            {...slideItem}
            current={currentSlide}
          />
        ))}
      </SlidesWrapper>
      {!isMobile && slides.length > 1 && (
      <NavigationWrapper>
        <BaseButton
          sx={{
            ...buttonStyles,
            span: {
              img: {
                transform: 'rotate(180deg) translateX(-50%)',
              },
            },
          }}
          startIcon={BtnImage}
          onClick={() => handleNavigate('prev')}
        />
        <BaseButton sx={buttonStyles} startIcon={BtnImage} onClick={() => handleNavigate('next')} />
      </NavigationWrapper>
      )}
    </CarouselWrapper>
  )
}
