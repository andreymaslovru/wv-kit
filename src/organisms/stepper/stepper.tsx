'use client'

import React, { FC, ReactNode } from 'react'
import Image from 'next/image'

import { Meter } from '@atoms'

import {
  StepperWrapper, LeftContainer, CenterContainer, RightContainer
} from './stepper.styled'

interface StepperProps {
  min?: number,
  max: number,
  value: number,
  tooltip?: ReactNode,
  handleClick: () => void,
}

export const Stepper: FC<StepperProps> = ({
  min = 0, max, value, tooltip, handleClick,
}) => {
  if (value > max) {
    value = max
  }
  if (value < min) {
    value = min
  }

  return (
    <StepperWrapper>
      <LeftContainer onClick={handleClick}>
        <Image src="/assets/next.svg" alt="Кнопка назад" width={8} height={16} />
      </LeftContainer>
      <CenterContainer id="meter-steps">
        {value}
        {' '}
        из
        {' '}
        {max}
        <Meter min={min} max={max} value={value} label="meter-steps" />
      </CenterContainer>
      <RightContainer>
        {tooltip}
      </RightContainer>
    </StepperWrapper>
  )
}
