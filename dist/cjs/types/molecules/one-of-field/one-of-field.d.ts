import { FC, ReactNode } from 'react';
interface OptionItem {
    label: string;
    value: string;
    icon: ReactNode | string;
}
export interface OneOfFieldProps {
    options: Array<OptionItem>;
    onClick: (value: string) => void;
    defaultSelected: string;
    title?: string;
}
export declare const OneOfCustomField: FC<OneOfFieldProps>;
export {};
