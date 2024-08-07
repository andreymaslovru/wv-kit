'use client'

import React, { FC } from 'react'

import { MeterContainer, MeterBar } from './meter.styled'

export interface MeterProps {
  min?: number,
  max: number,
  value: number,
  label?: string,
}

export const Meter: FC<MeterProps> = ({
  min = 0, max, value, label,
}) => (
  <MeterContainer role="meter" aria-valuemin={min} aria-valuemax={max} aria-valuenow={value} aria-labelledby={label}>
    <MeterBar value={value} max={max} />
  </MeterContainer>
)
