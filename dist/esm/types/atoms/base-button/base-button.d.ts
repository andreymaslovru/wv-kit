import { ButtonProps } from '@mui/material';
import { FC, ReactNode } from 'react';
export interface BaseButtonProps extends ButtonProps {
    isLoading?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
}
export declare const BaseButton: FC<BaseButtonProps>;
