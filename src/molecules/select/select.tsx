import React, { FC } from 'react'

import { SelectItem } from '@atoms'

import {
  BaseSelectWrapper,
  SelectLabel,
  ErrorText
} from './styles'

export interface SelectProps {
  label: string
  title?: string
  subtitle?: string
  icon?: string
  isLoading?: boolean
  error?: string
  noEndIcon?: boolean
  onClick?: () => void
}

export const BaseSelect: FC<SelectProps> = ({
  label, title, subtitle, icon, onClick, isLoading, error, noEndIcon,
}) => (
  <>
    {
      isLoading
        ? (
          <BaseSelectWrapper isErrored={!!error}>
            <SelectLabel isErrored={!!error}>{label}</SelectLabel>
            <SelectItem isLoading />
            {error && <ErrorText>{error}</ErrorText>}
          </BaseSelectWrapper>
        )
        : (
          <BaseSelectWrapper
            isErrored={!!error}
            onClick={() => onClick?.()}
          >
            {!noEndIcon && <SelectLabel isErrored={!!error}>{label}</SelectLabel>}
            {title && subtitle && icon
            && <SelectItem title={title} subtitle={subtitle} icon={icon} />}
            {error && <ErrorText>{error}</ErrorText>}
          </BaseSelectWrapper>
        )
    }
  </>
)
