import {
  InputAdornment,
  InputLabel,
  TextField as MuiTextField,
  TextFieldProps,
} from '@mui/material'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import React, {
  FC, MutableRefObject, ReactNode, Ref
} from 'react'

import Clear from '@public/assets/clear.svg'
import Tooltip from '@public/assets/tooltip.svg'

import { BaseButton, CustomTooltip } from '@atoms'
import { InputIcon } from '@atoms'

import {
  CardIconsWrapper,
  OptionalWrapper,
  TextFieldWrapper
} from './styles'

export interface BaseTextFieldProps extends Omit<TextFieldProps, 'label'> {
  label?: string;
  tooltip?: string;
  placeholder?: string;
  endIcon?: StaticImport | StaticImport[];
  startIcon?: ReactNode | string;
  helperText?: string;
  isError?: boolean;
  errorText?: string;
  disabled?: boolean;
  required?: boolean;
  isClearable?: boolean;
  noMargin?: boolean;
  handleClear?: () => void;
  inputRef?: Ref<HTMLInputElement> |
  MutableRefObject<unknown>;
  withHeight?: boolean
}

const getEndIcon = (
  endIcon: StaticImport | StaticImport[]
) => (
  <CardIconsWrapper>
    {Array.isArray(endIcon)
      ? endIcon.map((item, index) => <Image key={`pay-system-${index}`} src={item} alt="иконка платежной системы" />)
      : <Image src={endIcon} alt="иконка платежной системы" />}
  </CardIconsWrapper>
)

export const TextField: FC<BaseTextFieldProps> = ({
  label,
  endIcon,
  startIcon,
  helperText,
  errorText,
  isError,
  disabled,
  required = true,
  inputRef,
  isClearable,
  handleClear,
  value,
  tooltip,
  name,
  noMargin,
  onChange,
  withHeight,
  ...rest
}) => (
  <TextFieldWrapper withHeight={withHeight} noMargin={noMargin}>
    {label && (
      <InputLabel htmlFor={name} error={isError} disabled={disabled}>
        {label}
        {disabled && <InputIcon nameIcon="lock" alt="lock" width={16} height={16} />}
        {!required && <OptionalWrapper>Необязательно</OptionalWrapper>}
      </InputLabel>
    )}
    <MuiTextField
      hiddenLabel
      InputProps={{
        startAdornment: startIcon && (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            sx={{
              div: {
                display: 'flex', flexDirection: 'row', alignItems: 'center',
              },
            }}
            position="end"
          >
            {isError
              ? <InputIcon nameIcon="error" alt="error" />
              : endIcon && getEndIcon(endIcon)}
            <div>
              {isClearable && value
                ? (
                  <BaseButton
                    sx={{
                      minWidth: '24px',
                      height: '24px',
                      background: 'transparent',
                      ':hover': {
                        background: 'transparent',
                      },
                    }}
                    onClick={handleClear}
                  >
                    <Image src={Clear} alt="иконка очистки поля" />
                  </BaseButton>
                )
                : null}
              {
                tooltip
                && (
                <CustomTooltip
                  description={tooltip}
                  icon={<Image src={Tooltip} alt="иконка подсказки" />}
                />
                )
              }
            </div>
          </InputAdornment>
        ),
      }}
      inputRef={inputRef}
      onChange={onChange}
      helperText={isError ? errorText : helperText}
      error={isError}
      disabled={disabled}
      value={value}
      name={name}
      {...rest}
    />
  </TextFieldWrapper>
)
