import { ButtonOwnProps } from '@mui/material';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { FC, ReactNode } from 'react';
export interface SlideProps {
    title: string;
    background: StaticImageData | string;
    current: number;
    action: {
        title: string;
        onClick: () => void;
        variant: ButtonOwnProps['variant'];
    };
    animation?: ReactNode;
    subtitle?: string;
}
export declare const CarouselItem: FC<SlideProps>;
