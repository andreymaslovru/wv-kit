import { PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';
export type Breakpoints = {
    [value: string]: number;
};
export declare const getDesignTokens: (mode: PaletteMode) => ThemeOptions;
