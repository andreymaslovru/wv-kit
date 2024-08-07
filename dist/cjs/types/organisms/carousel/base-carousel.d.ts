import { FC } from 'react';
import { SlideProps } from '@molecules';
export interface CarouselProps {
    slides: Omit<SlideProps, 'current'>[];
    period: number;
}
export declare const BaseCarousel: FC<CarouselProps>;
