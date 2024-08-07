import { FC, ReactNode } from 'react';
import { ErrorSizes } from './error.styled';
export interface ErrorProps {
    icon: ReactNode;
    title: string;
    subtitle: string;
    size?: keyof typeof ErrorSizes;
}
export declare const Error: FC<ErrorProps>;
