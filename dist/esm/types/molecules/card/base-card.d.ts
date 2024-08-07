import { FC, ReactNode } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
export interface BaseInfoCardProps {
    header: ReactNode;
    icon: {
        src: StaticImport | string;
        alt: string;
    } | string;
    cursorPointer?: ReactNode;
    withTransform?: boolean;
    onClick?: () => void;
}
export declare const BaseInfoCard: FC<BaseInfoCardProps>;
