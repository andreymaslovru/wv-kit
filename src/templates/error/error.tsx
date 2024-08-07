import React, { FC, ReactNode } from 'react'

import {
  ErrorContainer, StyledTitle, StyledSubtitle, Icon, ErrorSizes
} from './error.styled'

export interface ErrorProps {
  icon: ReactNode,
  title: string,
  subtitle: string,
  size?: keyof typeof ErrorSizes,
}

export const Error: FC<ErrorProps> = ({
  icon, title, subtitle, size = 'Small',
}) => (
  <ErrorContainer>
    {typeof icon === 'string'
      ? <Icon src={icon} alt="desc" />
      : icon}
    <StyledTitle size={ErrorSizes[size]}>{title}</StyledTitle>
    <StyledSubtitle size={ErrorSizes[size]}>{subtitle}</StyledSubtitle>
  </ErrorContainer>
)
