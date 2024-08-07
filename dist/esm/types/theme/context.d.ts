import { Theme } from '@mui/material/styles';
import { ThemeMode } from './types';
export interface ModeContextProviderProps {
    mode: ThemeMode;
    theme?: Theme;
    toggleThemeMode: () => void | object;
}
export declare const ThemeContext: import("react").Context<ModeContextProviderProps>;
