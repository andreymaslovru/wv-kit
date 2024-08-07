import {
  Modal,
  ModalProps,
  Slide,
  Fade,
  Theme,
  useMediaQuery,
  useTheme,
  SlideProps,
  FadeProps,
  Backdrop,
} from '@mui/material'
import React, { FC, ReactNode } from 'react'

import { CloseIcon } from '@atoms'
import { BaseButton } from '@atoms'

import {
  CustomModalRoot,
  Description,
  Divider,
  Grid,
  Heading,
  ModalContainer,
  Subheading
} from './styles'

export interface BaseModalProps extends Omit<ModalProps, 'children'> {
  header?: ReactNode | string,
  subheader?: string,
  animation?: AnimationEnum,
  children?: ReactNode | string,
  isCustomPaddings?: boolean,
  bottomButton?: keyof typeof ButtonAppearanceEnum,
  buttonText?: string,
  headButton?: boolean,
  handleClose: () => void,
  handleButtonClick?: () => void,
}

const buttonStyles = {
  gridColumn: 2 / 3,
  height: '32px',
  minWidth: '32px',
  borderRadius: '12px',
  display: 'flex',
  span: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

enum ButtonAppearanceEnum {
  EVER,
  NEVER,
  MOBILE,
  NON_MOBILE,
}

enum AnimationEnum {
  SLIDE = 'Slide',
  FADE = 'Fade',
}

type AnimationSettingsProps = {
  Slide: Partial<SlideProps>,
  Fade: Partial<FadeProps>,
}

const CloseImg = <CloseIcon />

export const BaseModal: FC<BaseModalProps> = ({
  header,
  subheader,
  animation,
  open,
  isCustomPaddings,
  buttonText,
  bottomButton,
  handleClose,
  handleButtonClick,
  children,
  headButton = true,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery<Theme>(
    theme.breakpoints.between(0, theme.breakpoints.values.sm)
  )

  const AnimationSettings: AnimationSettingsProps = {
    Slide: {
      in: open,
      direction: 'up',
      timeout: 200,
      easing: { enter: 'ease-in-out', exit: 'ease-in-out' },
    },
    Fade: {
      in: open,
      easing: {
        enter: 'ease-in-out',
        exit: 'ease-in-out',
      },
      timeout: 200,
    },
  }

  const isButton = () => {
    switch (bottomButton) {
      case 'EVER':
        return true
      case 'NEVER':
        return false
      case 'NON_MOBILE':
        if (!isMobile) {
          return true
        }
        break
      case 'MOBILE':
        if (isMobile) {
          return true
        }
        break
      default:
        return false
    }
  }

  const AnimationComponent = {
    Slide,
    Fade,
  }[animation || (isMobile ? 'Slide' : 'Fade')]

  return (
    <Modal
      disableAutoFocus
      closeAfterTransition
      open={open}
      onClose={handleClose}
      slots={{ root: CustomModalRoot, backdrop: Backdrop }}
    >
      <AnimationComponent
        {...AnimationSettings[animation || (isMobile ? 'Slide' : 'Fade')]}
      >
        <ModalContainer isCustomPaddings={isCustomPaddings}>
          <Grid withSubheader={!!subheader} isCustomPaddings={isCustomPaddings}>
            {header && <Heading>{ header }</Heading>}
            {subheader && <Subheading>{ subheader }</Subheading>}
            {headButton && (
            <BaseButton
              variant="secondary"
              sx={buttonStyles}
              endIcon={CloseImg}
              onClick={handleClose}
            />
            )}
          </Grid>
          {
          typeof children === 'string'
            ? <Description>{ children }</Description>
            : children
          }
          {
          isButton()
            ? (
              <BaseButton
                onClick={handleButtonClick}
                variant="primary"
                size="large"
                sx={{
                  width: '100%',
                  margin: '16px 0 12px',
                  [theme.breakpoints.up('sm')]: {
                    margin: 0,
                  },
                }}
              >
                {buttonText}
              </BaseButton>
            )
            : false
        }
          <Divider />
        </ModalContainer>
      </AnimationComponent>
    </Modal>
  )
}
