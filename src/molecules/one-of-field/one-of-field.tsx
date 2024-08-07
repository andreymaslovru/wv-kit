import React, {
  FC, ReactNode, useCallback, useState
} from 'react'
import { InputLabel, styled } from '@mui/material'
import Image from 'next/image'

import { FilterItem, Spinner } from '@atoms'

interface OptionItem {
  label: string,
  value: string,
  icon: ReactNode | string
}

export interface OneOfFieldProps {
  options: Array<OptionItem>,
  onClick: (value: string) => void,
  defaultSelected: string,
  title?: string
}


export const OneOfCustomField: FC<OneOfFieldProps> = ({
  defaultSelected, options, onClick, title
}) => {
  const [selected, setSelected] = useState<string>(defaultSelected)
  
  if (options) {
    return (
      <Wrapper>
        {title && (
          <InputLabel>
            {title}
          </InputLabel>
        )}
        <InnerWrapper>
          {options && options.map(
            (option, index) => (
              <FilterItem
                key={`oneof-option-${index}`}
                label={option.label}
                icon={option.icon || null}
                size="lg"
                sx={{
                  padding: '12px 8px',
                  gap: '6px',
                  marginTop: '12px',
                  marginBottom: '8px',
                  '@media (min-width: 768px)': {
                    padding: '12px 16px',
                  },
                }}
                selected={option.value === selected}
                handleClick={() => {
                  setSelected(option.value)

                  onClick(option.value)
                }}
              />
            )
          )}
        </InnerWrapper>
      </Wrapper>
    )
  }

  return <Spinner/>
}

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}))

const InnerWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
}))
