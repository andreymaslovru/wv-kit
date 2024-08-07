import React, { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import { Size } from '@atoms';
export interface FilterItemGroupProps {
    size: keyof typeof Size;
    items?: GroupItemProps[];
    handleClick?: (value: string) => void;
}
type GroupItemProps = {
    label: string;
    value: string;
    selected?: boolean;
    icon?: ReactNode;
    sx?: SxProps;
};
export declare const FilterItemGroup: FC<FilterItemGroupProps>;
export declare const ItemsContainer: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
