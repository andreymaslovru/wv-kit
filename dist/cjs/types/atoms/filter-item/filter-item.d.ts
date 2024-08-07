import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import { Size } from './styles';
export interface FilterItemProps {
    label: string;
    size: keyof typeof Size;
    selected?: boolean;
    handleClick: () => void;
    icon?: string | ReactNode;
    sx?: SxProps;
}
export declare const FilterItem: FC<FilterItemProps>;
