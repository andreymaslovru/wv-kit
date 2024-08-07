'use client'

import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import Cookies from 'js-cookie'
import { createTheme } from '@mui/material/styles'

import { ModeContextProviderProps, ThemeContext } from '@theme'

import { getDesignTokens } from './theme'
import { ThemeMode } from './types'

const ThemeContextProvider: FC<PropsWithChildren & { theme: string }> = ({
  children, theme: themeFromSSR,
}) => {
  const [mode, setMode] = useState<ThemeMode>(themeFromSSR as ThemeMode)

  const toggleThemeMode = useCallback(() => {
    const current = mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT

    setMode(current)
    Cookies.set('theme', current)
  }, [mode])

  const theme = mode && createTheme(getDesignTokens(mode))

  const context = useMemo(() => ({
    theme, mode, toggleThemeMode,
  }), [mode, theme, toggleThemeMode]) as ModeContextProviderProps

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export default ThemeContextProvider
