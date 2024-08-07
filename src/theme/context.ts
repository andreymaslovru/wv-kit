'use client'

import {
  createContext,
} from 'react'
import { Theme } from '@mui/material/styles'

import { ThemeMode } from './types'

export interface ModeContextProviderProps {
  mode: ThemeMode;
  theme?: Theme;
  toggleThemeMode: () => void | object;
}

export const ThemeContext = createContext<ModeContextProviderProps>({
  mode: ThemeMode.DARK,
  toggleThemeMode: () => {},
})
