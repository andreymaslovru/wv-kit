import Image from 'next/image'
import React, {
  FC, useCallback, useState
} from 'react'
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material'

import Arrow from '@public/assets/dd-icon.svg'

import {
  DropdownWrapper,
  CustomPlaceholder,
} from './style'


export interface DropdownProps {
  options: Array<Record<string, string>>
  name: string
  onClick: (value: string) => void
  placeholder: string
  label?: string
  disable?: boolean
  error?: string
  helperText?: string
}

const CheckedIcon: FC = () => {
  const theme = useTheme()

  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill={theme.palette.icons.primary} xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.1087 0.223574C11.4015 0.516467 11.4016 0.99134 11.1087 1.28423L5.19667 7.19626C5.05602 7.33691 4.86526 7.41593 4.66634 7.41593C4.46743 7.41593 4.27666 7.33691 4.13601 7.19626L0.802678 3.86293C0.509785 3.57004 0.509785 3.09516 0.802678 2.80227C1.09557 2.50938 1.57044 2.50937 1.86334 2.80227L4.66634 5.60527L10.048 0.223578C10.3409 -0.0693163 10.8158 -0.0693179 11.1087 0.223574Z" />
    </svg>
  )
}

const ArrowIcon = () => (
  <Image
    aria-hidden
    src={Arrow}
    alt="Иконка выпадающего списка"
    width={24}
    height={24}
  />
)

export const Dropdown: FC<DropdownProps> = ({
  options, 
  label, 
  disable, 
  error, 
  helperText,
  onClick,
  name,
  placeholder
}) => {
  const [value, setValue] = useState<Record<string, string> | null>(null)

  const theme = useTheme()

  const handleChange = useCallback((option: Record<string, string>) => {
    setValue(option)
    onClick(option.value)
  }, [onClick])

  if (!options) return

  return (
    <DropdownWrapper>
      {label && (
        <InputLabel
          disabled={disable}
          error={!!error}
          htmlFor={name}
        >
          {label}
        </InputLabel>
      )}
      {
        !value?.label && placeholder
          && <CustomPlaceholder>{placeholder}</CustomPlaceholder>
      }
          <Select
            disabled={disable}
            value={value?.label || ''}
            renderValue={(value) => String(value)}
            IconComponent={ArrowIcon}
            error={!!error}
            name={name}
          >
            {options?.map(
              (option, index) => (
                <MenuItem key={`menu-item-${index}`} value={option.label} onClick={() => handleChange(option)}>
                  {option.label}
                  {option.label === value?.label && <CheckedIcon />}
                </MenuItem>
              )
            )}
          </Select>
      {(error || helperText) && (
        <FormHelperText
          sx={{
            color: error
              ? theme?.palette?.accent?.negative
              : theme?.palette?.text?.primary,
          }}
        >
          { error || helperText }
        </FormHelperText>
      )}
    </DropdownWrapper>
  )
}
