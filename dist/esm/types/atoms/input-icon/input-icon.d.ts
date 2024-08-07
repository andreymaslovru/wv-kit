import { IconProps } from '@mui/material';
import { FC } from 'react';
export interface InputIconProps extends IconProps {
    className?: string;
    nameIcon: string;
    alt: string;
    width?: number;
    height?: number;
}
export declare const InputIcon: FC<InputIconProps>;
