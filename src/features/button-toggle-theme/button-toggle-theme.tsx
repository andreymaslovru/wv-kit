'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import MoonIcon from '@public/assets/icons/moon.svg'
import SunIcon from '@public/assets/icons/sun.svg'

import { ThemeMode, useThemeContext } from '@theme'
import { SwitchThumb, ToggleSwitch } from './styled'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const ButtonToggleTheme = () => {
  const { toggleThemeMode, mode } = useThemeContext()
  const [checked, setChecked] = useState<boolean>(mode === ThemeMode.LIGHT)

  const handleClick = () => {
    toggleThemeMode()
    setChecked(!checked)
  }

  return (
    <ToggleSwitch onClick={handleClick} role="switch">
      <SwitchThumb checked={checked}>
        <Image src={(!checked ? MoonIcon : SunIcon) as StaticImport} alt="Иконка смены палитры" />
      </SwitchThumb>
    </ToggleSwitch>
  )
}
