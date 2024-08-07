import { ComponentPropsWithoutRef, FC } from 'react';
export interface SpinnerProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
}
export declare const Spinner: FC<SpinnerProps>;
