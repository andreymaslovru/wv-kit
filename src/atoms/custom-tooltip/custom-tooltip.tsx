'use client'

import React, {
  FC, ReactNode, useState
} from 'react'
import {
  ClickAwayListener, Tooltip, Typography, useMediaQuery, useTheme
} from '@mui/material'

import { TooltipIcon } from './custom-tooltip.styled'

interface InnerTooltipProps {
  children: JSX.Element,
  description?: string,
  handleClick?: () => void,
}

export interface CustomTooltipProps {
  icon?: ReactNode,
  description?: string,
  textOnMobile?: boolean,
  children?: JSX.Element | ReactNode,
  handleClick?: () => void,
}

export const CustomTooltip: FC<CustomTooltipProps> = ({
  description, icon, textOnMobile, children, handleClick,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints?.down?.('sm'))
  const tooltipContent = typeof icon === 'string' ? <TooltipIcon src={icon} /> : <div style={{ display: 'flex', width: 'fit-content' }}>{icon}</div>

  return (
    <div style={{ cursor: 'pointer' }}>
      {isMobile
        ? (
          <MobileTooltip description={description} handleClick={handleClick}>
            {textOnMobile
              ? (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                  {tooltipContent}
                  <Typography variant="p3_Regular_Text">{children}</Typography>
                </div>
              )
              : tooltipContent}
          </MobileTooltip>
        )
        : (
          <DesktopTooltip description={description} handleClick={handleClick}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {tooltipContent}
              <Typography variant="p3_Regular_Text">{children}</Typography>
            </div>
          </DesktopTooltip>
        )}
    </div>
  )
}

const DesktopTooltip: FC<InnerTooltipProps> = ({ description, children, handleClick }) => (
  <Tooltip
    arrow
    disableHoverListener={!!handleClick}
    placement="top-end"
    title={description}
    sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    onClick={handleClick}
  >
    {children}
  </Tooltip>
)

const MobileTooltip: FC<InnerTooltipProps> = ({ description, children, handleClick }) => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    if (handleClick) {
      handleClick()
    } else {
      setOpen(true)
    }
  }

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        arrow
        title={description}
        placement="top-end"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={open ? handleTooltipClose : handleTooltipOpen}
        onClose={handleTooltipClose}
        open={open}
      >
        {children}
      </Tooltip>
    </ClickAwayListener>
  )
}
