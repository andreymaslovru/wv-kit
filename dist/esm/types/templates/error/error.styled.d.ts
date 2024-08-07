import { Theme } from '@mui/material/styles';
export declare enum ErrorSizes {
    Small = "Small",
    Large = "Large"
}
export declare const ErrorContainer: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface StyledProps {
    size?: ErrorSizes;
}
export declare const StyledTitle: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & StyledProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const StyledSubtitle: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & StyledProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const Icon: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme>, import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
export {};
