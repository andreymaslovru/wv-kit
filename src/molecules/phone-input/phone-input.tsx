import React, {
  FC, useEffect, useState
} from 'react'
import { BaseTextFieldProps, SxProps } from '@mui/material'
import { useIMask } from 'react-imask'
import { FactoryOpts } from 'imask/index'

import { TextField } from '@molecules'
import countriesCodes from '@shared/countries-phone-codes.json';

interface ICountryCode {
  code: string,
  iso: string,
  mask: string
}

export interface PhoneInputProps extends BaseTextFieldProps {
  label?: string,
  placeholder?: string,
  isError?: boolean,
  errorText?: string,
  countryCode?: string,
  valueBubble?: (value: string) => void,
  fieldTouched?: () => void,
  sx?: SxProps
}

export const PhoneInput: FC<PhoneInputProps> = ({
  label,
  placeholder,
  isError,
  errorText = undefined,
  countryCode = 'RU',
  valueBubble,
  fieldTouched,
  size,
  sx,
  name,
}) => {
  const countryPhone = countriesCodes.filter((item: ICountryCode) => item.iso === countryCode)[0]

  const phoneMaskOptions: FactoryOpts = {
    mask: [Array.isArray(countryPhone.mask)
      ? countryPhone.mask.map((item: string) => ({ mask: `[${countryPhone.code}] ${item}` }))[0]
      : `[${countryPhone.code}] ${countryPhone.mask}`],
    lazy: true,
    placeholderChar: '',
    prepare: (appended) => {
      const maxMaskLen = Array.isArray(countryPhone.mask)
        ? Math.max(...countryPhone.mask.map((item: string) => item.replace(/\D/g, '').length))
        : countryPhone.mask.replace(/\D/g, '').length

      const rawAppended = appended.replace(/\D/g, '')
      const maxPhoneNumberLength = maxMaskLen + countryPhone.code.replace(/\D/g, '').length

      if (rawAppended.length > maxPhoneNumberLength) {
        return rawAppended.slice(0, maxPhoneNumberLength)
      }

      return rawAppended
    },
  }

  const [opts] = useState(phoneMaskOptions)

  const {
    maskRef, ref, value, unmaskedValue, setValue,
  } = useIMask(opts)

  const handleBlur = () => {
    if (unmaskedValue === '') {
      setValue('')
    }
    fieldTouched?.()
  }

  const handleChange = () => {
    if (maskRef.current?.value) {
      setValue(maskRef.current?.value)
    }
  }

  useEffect(() => {
    valueBubble?.(unmaskedValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unmaskedValue])

  return (
    <TextField
      label={label}
      size={size}
      placeholder={placeholder}
      value={value}
      onBlur={handleBlur}
      inputRef={ref}
      isError={isError}
      errorText={errorText}
      onChange={handleChange}
      sx={{ width: '100%', ...sx }}
      name={name}
    />
  )
}
