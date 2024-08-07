import { ComponentPropsWithoutRef, FC } from 'react';
export interface CardIconProps extends ComponentPropsWithoutRef<'svg'> {
    color?: string;
}
export declare const CardIcon: FC<CardIconProps>;
