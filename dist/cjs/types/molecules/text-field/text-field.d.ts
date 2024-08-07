import { TextFieldProps } from '@mui/material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FC, MutableRefObject, ReactNode, Ref } from 'react';
export interface BaseTextFieldProps extends Omit<TextFieldProps, 'label'> {
    label?: string;
    tooltip?: string;
    placeholder?: string;
    endIcon?: StaticImport | StaticImport[];
    startIcon?: ReactNode | string;
    helperText?: string;
    isError?: boolean;
    errorText?: string;
    disabled?: boolean;
    required?: boolean;
    isClearable?: boolean;
    noMargin?: boolean;
    handleClear?: () => void;
    inputRef?: Ref<HTMLInputElement> | MutableRefObject<unknown>;
    withHeight?: boolean;
}
export declare const TextField: FC<BaseTextFieldProps>;
