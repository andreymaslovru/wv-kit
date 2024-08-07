import { FC } from 'react';
export interface CountryInputProps {
    onChange: (value: string) => void;
    placeholder: string;
}
export declare const CountryInput: FC<CountryInputProps>;
