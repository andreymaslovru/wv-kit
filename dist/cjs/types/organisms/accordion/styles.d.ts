import { Theme } from '@mui/material';
export declare enum AccordionSizes {
    Small = "Small",
    Large = "Large"
}
export declare const AccordionWrapper: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & {
    size: AccordionSizes;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const AccordionHeading: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<Theme> & {
    size: AccordionSizes;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;
