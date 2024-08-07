'use client'

import {
  InputAdornment, TextField, styled, useTheme
} from '@mui/material'
import Image from 'next/image'
import React, {
  FC, useEffect, useRef, useState
} from 'react'

import Search from '@public/assets/icons/search.svg'
import Clear from '@public/assets/icons/clear.svg'

import { BaseButton } from '@atoms'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface CountryInputProps {
  onChange: (value: string) => void
  placeholder: string,
}

export const CountryInput: FC<CountryInputProps> = ({ onChange, placeholder }) => {
  const [value, setValue] = useState('')
  const theme = useTheme()

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onChange(value)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Container>
      <TextField
        size="xsmall"
        inputRef={inputRef}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
        placeholder={placeholder}
        sx={{
          '.MuiInputBase-root': {
            border: 'unset !important',
          },
          '.MuiInputBase-root input': {
            ...theme.typography.p3_Regular_Text,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Image src={Search as StaticImport} alt="иконка поиск" width={24} height={24} />
            </InputAdornment>
          ),
          endAdornment: inputRef && inputRef?.current?.value && (
          <InputAdornment position="end">
            <BaseButton
              sx={{
                background: 'transparent',
                minWidth: '32px',
                padding: 0,
                '&:hover': {
                  background: 'transparent',
                },
              }}
              onClick={() => {
                setValue('')
              }}
            >
              <Image src={Clear as StaticImport} alt="иконка очистки" width={24} height={24} />
            </BaseButton>
          </InputAdornment>
          ),
        }}
      />
      {inputRef?.current?.value && (
      <BaseButton
        size="small"
        sx={{
          background: 'transparent',
          minWidth: '59px',
          textTransform: 'capitalize',
          color: theme?.palette?.text?.primary,
          ...theme?.typography?.p3_Regular_Text,
          '&:hover': {
            background: 'transparent',
          },
        }}
        onClick={() => {
          setValue('')
        }}
      >
        Отмена
      </BaseButton>
      )}
    </Container>

  )
}

const Container = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  gap: '8px',
  padding: '4px 12px',
}))
