export declare enum Size {
    sm = "32px",
    md = "44px",
    lg = "52px",
    xl = "74px"
}
export declare enum FilterItemPadding {
    sm = "6px 10px",
    md = "10px 12px",
    lg = "12px 16px",
    xl = "12px 0"
}
export declare const FilterItemsWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    size: keyof typeof Size;
    isSelected?: boolean;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledImage: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
export declare const ImageWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
