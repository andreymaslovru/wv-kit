'use client'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { FC, ReactNode, useState } from 'react'
import Image from 'next/image'

import DownArrow from '@public/assets/icons/downArrow.svg'

import { BaseModal } from '@molecules'
import { BaseContainer } from '@templates'

import { AccordionHeading, AccordionSizes } from './styles'

const Arrow = <Image aria-hidden src={DownArrow} alt="Иконка открытия выпадающего окна" />

export interface AccordionItemProps {
  summary: string,
  desctiprion: ReactNode | string
}

export interface BaseAccordionProps {
  header: ReactNode,
  items: AccordionItemProps[],
  size?: keyof typeof AccordionSizes,
}

export const BaseAccordion: FC<BaseAccordionProps> = ({
  header, items, size = 'Large',
}) => {
  const [expanded, setExpanded] = useState<string | null>(null)

  const theme = useTheme()
  const isMobile = useMediaQuery<Theme>(theme?.breakpoints?.down?.('sm'))

  const handleChange = (panel: string) => {
    setExpanded(panel === expanded ? null : panel)
  }

  return (
    <BaseContainer sx={{
      [theme.breakpoints.up('xs')]: {
        gap: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        gap: '32px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: size === 'Large' ? '64px 64px 48px' : '48px 64px 32px',
        gap: size === 'Large' ? '48px' : '24px',
      },
    }}
    >
      <AccordionHeading size={AccordionSizes[size]}>{header}</AccordionHeading>
      <div>
        {items.map((item, index) => (
          <Accordion key={`panel-${index}`} onChange={() => handleChange(`panel${index}`)}>
            <AccordionSummary expandIcon={Arrow}>{item.summary}</AccordionSummary>
            <AccordionDetails>
              {
              !isMobile
                ? item.desctiprion
                : (
                  <BaseModal
                    open={expanded === `panel${index}`}
                    handleClose={() => handleChange(`panel${index}`)}
                    header={item.summary}
                  >
                    {item.desctiprion}
                  </BaseModal>
                )
            }
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </BaseContainer>
  )
}
