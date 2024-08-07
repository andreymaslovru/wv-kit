import { FC, ReactNode } from 'react';
interface StepperProps {
    min?: number;
    max: number;
    value: number;
    tooltip?: ReactNode;
    handleClick: () => void;
}
export declare const Stepper: FC<StepperProps>;
export {};
