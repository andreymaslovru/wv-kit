import { FC } from 'react';
export declare enum StatusText {
    success = "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D",
    inProgress = "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0432 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435",
    failed = "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043D\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D"
}
export interface StatusIconProps {
    status: keyof typeof StatusText;
    error?: string;
}
export declare const StatusIcon: FC<StatusIconProps>;
