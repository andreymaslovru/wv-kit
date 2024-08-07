import { FC } from 'react';
export interface SelectProps {
    label: string;
    title?: string;
    subtitle?: string;
    icon?: string;
    isLoading?: boolean;
    error?: string;
    noEndIcon?: boolean;
    onClick?: () => void;
}
export declare const BaseSelect: FC<SelectProps>;
