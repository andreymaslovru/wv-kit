import { FC } from 'react';
export interface DropdownProps {
    options: Array<Record<string, string>>;
    name: string;
    onClick: (value: string) => void;
    placeholder: string;
    label?: string;
    disable?: boolean;
    error?: string;
    helperText?: string;
}
export declare const Dropdown: FC<DropdownProps>;
