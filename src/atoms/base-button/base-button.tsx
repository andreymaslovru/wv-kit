import {
  Button, ButtonProps
} from '@mui/material'
import React, { FC, ReactNode } from 'react'

import { Spinner } from '../spinner/Spinner'

export interface BaseButtonProps extends ButtonProps {
  isLoading?: boolean,
  endIcon?: ReactNode,
  startIcon?: ReactNode
}

export const BaseButton: FC<BaseButtonProps> = ({ isLoading, children, ...rest }) => (
  <Button {...rest}>
    {isLoading ? (
      <Spinner />
    ) : children}
  </Button>
)
