import { FC } from 'react';
import { BaseTextFieldProps, SxProps } from '@mui/material';
export interface PhoneInputProps extends BaseTextFieldProps {
    label?: string;
    placeholder?: string;
    isError?: boolean;
    errorText?: string;
    countryCode?: string;
    valueBubble?: (value: string) => void;
    fieldTouched?: () => void;
    sx?: SxProps;
}
export declare const PhoneInput: FC<PhoneInputProps>;
