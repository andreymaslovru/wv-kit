import { ReactNode, FC } from 'react';
export declare const constants: BankCardProps;
type listParamsProps = {
    title: string;
    content: string | ReactNode;
};
export interface BankCardProps {
    imageSrc: string;
    bankName: string;
    paymentMethod: string;
    listParams?: Array<listParamsProps>;
    isProfitable?: boolean;
    onClick?: () => void;
}
export declare const BankCard: FC<BankCardProps>;
export {};
