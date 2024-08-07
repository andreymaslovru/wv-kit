import { FC } from 'react';
import { ErrorSizes } from '../error.styled';
declare enum ErrorEnum {
    ERROR_404 = "error404",
    NOT_FOUND_ERROR = "notFoundError",
    FETCH_DATA_ERROR = "fetchDataError"
}
interface ErrorTemplateProps {
    type: keyof typeof ErrorEnum;
    size?: keyof typeof ErrorSizes;
}
export declare const ErrorTemplate: FC<ErrorTemplateProps>;
export {};
