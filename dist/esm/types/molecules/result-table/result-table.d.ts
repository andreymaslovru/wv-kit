import { FC } from 'react';
export interface TableItem {
    key: string;
    value: string;
}
export interface ResultTableProps {
    items: TableItem[];
    isDetailed?: boolean;
    withHiddenItems?: boolean;
}
export declare const ResultTable: FC<ResultTableProps>;
