import { FC } from 'react';
export interface MeterProps {
    min?: number;
    max: number;
    value: number;
    label?: string;
}
export declare const Meter: FC<MeterProps>;
