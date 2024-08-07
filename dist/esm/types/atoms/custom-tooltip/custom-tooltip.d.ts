import { FC, ReactNode } from 'react';
export interface CustomTooltipProps {
    icon?: ReactNode;
    description?: string;
    textOnMobile?: boolean;
    children?: JSX.Element | ReactNode;
    handleClick?: () => void;
}
export declare const CustomTooltip: FC<CustomTooltipProps>;
