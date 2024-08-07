export declare enum ListMapperSizes {
    Small = "Small",
    Normal = "Normal"
}
interface ContainerItemProps {
    isDivider?: boolean;
    isHorizontal?: boolean;
    size?: ListMapperSizes;
}
export declare const Container: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;
export declare const ContainerItem: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme> & ContainerItemProps, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
export {};
