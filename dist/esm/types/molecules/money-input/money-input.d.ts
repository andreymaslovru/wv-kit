import { FC } from 'react';
import { BaseTextFieldProps } from '@mui/material';
export interface ICurrency {
    id: string;
    currencyCode: string;
    ISOCode: string;
    nameCyrillic: string;
    nameLat: string;
    imageRef: string;
    symbol: string;
}
export interface MoneyInputProps extends BaseTextFieldProps {
    label?: string;
    placeholder?: string;
    currency?: ICurrency;
    isError?: boolean;
    errorText?: string;
    valueBubble?: (value: string) => void;
    fieldTouched?: () => void;
}
export declare const MoneyInput: FC<MoneyInputProps>;
