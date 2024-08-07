import { ModalProps } from '@mui/material';
import { FC, ReactNode } from 'react';
export interface BaseModalProps extends Omit<ModalProps, 'children'> {
    header?: ReactNode | string;
    subheader?: string;
    animation?: AnimationEnum;
    children?: ReactNode | string;
    isCustomPaddings?: boolean;
    bottomButton?: keyof typeof ButtonAppearanceEnum;
    buttonText?: string;
    headButton?: boolean;
    handleClose: () => void;
    handleButtonClick?: () => void;
}
declare enum ButtonAppearanceEnum {
    EVER = 0,
    NEVER = 1,
    MOBILE = 2,
    NON_MOBILE = 3
}
declare enum AnimationEnum {
    SLIDE = "Slide",
    FADE = "Fade"
}
export declare const BaseModal: FC<BaseModalProps>;
export {};
