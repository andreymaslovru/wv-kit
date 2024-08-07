import React, {
  FC, useEffect, useMemo, useState
} from 'react'
import { BaseTextFieldProps } from '@mui/material'
import { useIMask } from 'react-imask'
import { FactoryOpts } from 'imask/index'
import { TextField } from '@molecules'

export interface ICurrency {
  id: string,
  currencyCode: string,
  ISOCode: string,
  nameCyrillic: string,
  nameLat: string,
  imageRef: string,
  symbol: string,
}

export interface MoneyInputProps extends BaseTextFieldProps {
  label?: string,
  placeholder?: string,
  currency?: ICurrency,
  isError?: boolean,
  errorText?: string,
  valueBubble?: (value: string) => void,
  fieldTouched?: () => void,
}

export const MoneyInput: FC<MoneyInputProps> = ({
  label,
  placeholder,
  currency,
  isError,
  errorText = undefined,
  valueBubble,
  fieldTouched,
  onBlur,
  defaultValue,
  helperText,
}) => {
  const moneyMaskOptions: FactoryOpts = useMemo(() => ({
    mask: [{ mask: '' }, {
      mask: `nums ${currency ? currency.currencyCode : 'RUB'}`,
      lazy: false,
      autofix: false,
      blocks: {
        nums: {
          mask: Number,
          thousandsSeparator: ' ',
          normalizeZeros: true,
          min: 0,
        },
      },
    }],
  }), [currency])

  const [opts, setOpts] = useState(moneyMaskOptions)

  const {
    maskRef, ref, unmaskedValue, setValue, setUnmaskedValue,
  } = useIMask(opts)

  useEffect(() => {
    setOpts(moneyMaskOptions)
  }, [currency, moneyMaskOptions])

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
    if (unmaskedValue === '') {
      setValue('')
    }
    if (onBlur) {
      onBlur(event)
    }
    fieldTouched?.()
  }

  const handleFocus = () => {
    if (!maskRef.current?.value) {
      setValue(` ${currency ? currency.currencyCode : 'RUB'}`)
    }
  }

  const handleChange = () => {
    if (maskRef.current?.value) {
      setValue(maskRef.current?.value)
    }
  }

  useEffect(() => {
    setUnmaskedValue(defaultValue as string)
  }, [defaultValue])

  useEffect(() => {
    valueBubble?.(unmaskedValue)
  }, [unmaskedValue])

  return (
    <TextField
      noMargin
      label={label}
      size="medium"
      placeholder={placeholder}
      onBlur={handleBlur}
      inputRef={ref}
      isError={isError}
      errorText={errorText}
      onChange={handleChange}
      onFocus={handleFocus}
      helperText={helperText as string}
    />
  )
}
