import { ReactNode, FC } from 'react';
import { SxProps, TypographyOwnProps } from '@mui/material';
import { ListMapperSizes } from './list-mapper.styled';
export declare const constants: ListMapperProps['list'];
type ItemProps = {
    title: string;
    content: ReactNode;
};
interface ListMapperProps {
    list: Array<ItemProps>;
    isDivider?: boolean;
    isHorizontal?: boolean;
    size?: keyof typeof ListMapperSizes;
    titleFontVariant?: TypographyOwnProps['variant'];
    contentFontVariant?: TypographyOwnProps['variant'];
    sx?: SxProps;
}
export declare const ListMapper: FC<ListMapperProps>;
export {};
