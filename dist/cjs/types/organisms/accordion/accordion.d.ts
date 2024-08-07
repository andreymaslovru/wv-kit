import { FC, ReactNode } from 'react';
import { AccordionSizes } from './styles';
export interface AccordionItemProps {
    summary: string;
    desctiprion: ReactNode | string;
}
export interface BaseAccordionProps {
    header: ReactNode;
    items: AccordionItemProps[];
    size?: keyof typeof AccordionSizes;
}
export declare const BaseAccordion: FC<BaseAccordionProps>;
