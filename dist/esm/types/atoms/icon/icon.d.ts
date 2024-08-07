import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FC } from 'react';
export interface IconProps {
    src: StaticImport | string;
    alt: string;
}
export declare const Icon: FC<IconProps>;
