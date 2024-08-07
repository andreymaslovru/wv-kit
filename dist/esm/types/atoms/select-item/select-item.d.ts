import { FC } from 'react';
export interface SelectItemProps {
    icon?: string;
    title?: string;
    subtitle?: string;
    isLoading?: boolean;
    noEndIcon?: boolean;
    onClick?: () => void;
}
export declare const SelectItem: FC<SelectItemProps>;
