import { FC, PropsWithChildren } from 'react';
import { ModeContextProviderProps } from '@theme';
declare const ThemeContextProvider: FC<PropsWithChildren & {
    theme: string;
}>;
export declare const useThemeContext: () => ModeContextProviderProps;
export default ThemeContextProvider;
