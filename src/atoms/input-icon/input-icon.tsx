import styled from '@emotion/styled'
import { IconProps } from '@mui/material'
import Image from 'next/image'
import React, { FC } from 'react'

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export interface InputIconProps extends IconProps {
  className?: string;
  nameIcon: string;
  alt: string;
  width?: number;
  height?: number;
}

export const InputIcon: FC<InputIconProps> = ({
  className, nameIcon, alt, width = 24, height = 24,
}) => (
  <WrapperContainer className={className}>
    <Image src={`/assets/icons/${nameIcon}.svg`} width={width} height={height} alt={alt} />
  </WrapperContainer>
)
