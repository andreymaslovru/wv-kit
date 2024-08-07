import { FC, PropsWithChildren } from 'react';
import { SxProps, Theme } from '@mui/material';
interface GlobalContainerProps extends PropsWithChildren {
    withoutLineHeight?: boolean;
    withoutInnerPaddings?: boolean;
    sx?: SxProps<Theme>;
}
export declare const GlobalContainer: FC<GlobalContainerProps>;
export {};
