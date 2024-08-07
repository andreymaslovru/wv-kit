'use client'

import { PaletteMode } from '@mui/material'
import { PaletteOptions } from '@mui/material/styles/createPalette'
import { ThemeOptions } from '@mui/material/styles/createTheme'

import { customPalette } from './constants/custom-palette'
import { typographyRules } from './typography'
import { breakpoints } from './breakpoints'

export type Breakpoints = {
  [value: string]: number
}

export const getDesignTokens = (mode: PaletteMode) => ({
  breakpoints: {
    ...breakpoints,
  },
  typography: {
    ...typographyRules,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        '::-webkit-scrollbar': {
          width: '4px',
        },
        '::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          background: customPalette.controls[mode].inactiveTabbar,
          borderRadius: '4px',
          width: '4px',
          height: '32px',
        },
      }),
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: customPalette.background[mode].inverted,
          width: '25px',
          height: '12px',
          '&::before': {
            width: '18px',
            height: '12px',
            borderRadius: '3px',
          },
        },
        tooltipArrow: ({ theme }) => ({
          padding: '10px 12px',
          maxWidth: 'none',
          borderRadius: '12px',
          ...theme.typography.p4_Regular_Comp,
          color: theme.palette.backgroundCustom.primaryElevated,
          backgroundColor: theme.palette.backgroundCustom.inverted,
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: '100%',
          padding: 0,
          margin: 0,
          boxShadow: 'none',
          backgroundColor: customPalette.background[mode]?.primaryElevated,
          '&::before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
            '&::before': {
              position: 'relative',
            },
          },
          '&:last-child': {
            '.MuiAccordionSummary-root': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          ...typographyRules.p3_Regular_Text,
          width: '100%',
          margin: 0,
          padding: 0,
          minHeight: '52px',
          gap: '12px',
          backgroundColor: customPalette.background[mode].primaryElevated,
          '&.Mui-expanded': {
            margin: 0,
            minHeight: '52px',
          },
          '.MuiAccordionSummary-expandIconWrapper': {
            justifyContent: 'center',
            alignItems: 'center',
            '&.Mui-expanded': {
              transform: 'none',
            },
          },
          [`@media (min-width: ${breakpoints.values.xs}px)`]: {
            padding: '14px 0',
            '.MuiAccordionSummary-expandIconWrapper': {
              '&.Mui-expanded': {
                transform: 'none',
              },
              width: '24px',
              height: '24px',
              '> img': {
                width: '8px',
                height: '14px',
              },
            },
          },
          [`@media (min-width: ${breakpoints.values.sm}px)`]: {
            ...typographyRules.h3_Comp,
            padding: '34px 0',
            borderBottom: `1px solid ${customPalette.background[mode].stroke}`,
            '&.Mui-expanded': {
              borderBottom: 'none',
            },
            '.MuiAccordionSummary-expandIconWrapper': {
              transform: 'rotate(90deg)',
              '&.Mui-expanded': {
                transform: 'rotate(-90deg)',
              },
              width: '32px',
              height: '28px',
              '> img': {
                width: '11px',
                height: '22px',
              },
            },
          },
          [`@media (min-width: ${breakpoints.values.xl}px)`]: {
            ...typographyRules.h3_Comp,
          },
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          ...typographyRules.p2_Regular_Comp,
          backgroundColor: customPalette.background[mode].primaryElevated,
          padding: 0,
          [`@media (min-width: ${breakpoints.values.sm}px)`]: {
            paddingBottom: '21px',
          },
          [`@media (min-width: ${breakpoints.values.xl}px)`]: {
            fontSize: '20px',
          },
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        root: {
          display: 'none',
          '@media (min-width: 600px)': {
            display: 'block',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          '.MuiPaper-root': {
            marginTop: '2px',
            border: `1px solid ${customPalette.background[mode].stroke}`,
            borderRadius: '16px',
            width: '100%',
            boxShadow: 'none',
            maxWidth: '335px',
            [`@media (min-width: ${breakpoints.values.sm})`]: {
              maxWidth: '420px',
            },
            ul: {
              backgroundColor: customPalette.background[mode].modal,
              padding: '6px 0',
              overflowY: 'scroll',
              overflowX: 'hidden',
              li: {
                textWrap: 'balance',
              },
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          ...typographyRules.p3_Regular_Text,
          padding: '10px 12px',
          backgroundColor: customPalette.background[mode].modal,
          '&:hover': {
            backgroundColor: customPalette.background[mode].secondary,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: customPalette.text[mode].secondary,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          marginBottom: '8px',
          ...typographyRules.p4_Regular_Comp,
          '.Mui-error': {
            color: customPalette.accent[mode].negative,
          },
          '.Mui-disabled': {
            alignItems: 'flex-start',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          ...typographyRules.p3_Comp,
          borderRadius: '16px',
          width: '100%',
          minWidth: '300px',
          height: '52px',
          border: `1px solid ${customPalette.background[mode].stroke}`,
          backgroundColor: customPalette.background[mode].secondary,
          color: customPalette.text[mode].primary,
          input: {
            display: 'none',
          },
          img: {
            marginRight: '8px',
            transition: 'all 0.125s ease',
          },
          'div[aria-expanded="true"] ~ img': {
            transform: 'rotate(180deg)',
          },
          '&.Mui-error': {
            border: `1px solid ${customPalette.accent[mode].negative}`,
          },
          '.MuiSelect-select': {
            padding: '14px 0 14px 12px',
          },
          ':hover': {
            border: `1px solid ${customPalette.controls[mode].primaryHover}`,
          },
          '.Mui-focused': {
            border: `1px solid ${customPalette.constant.blueberry.normal}`,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiInputBase-root': {
            ...typographyRules.p3_Comp,
            margin: '0',
            width: '100%',
            border: `1px solid ${customPalette.background[mode].stroke}`,
            backgroundColor: customPalette.background[mode].secondary,
            borderRadius: '16px',
            height: '52px',
            padding: 0,
            input: {
              padding: '14px 0 14px 12px',
              height: '52px',
              boxSizing: 'border-box',
              '::placeholder': {
                color: customPalette.text[mode].secondary,
                opacity: 1,
              },
            },
            'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
              transition: 'all 5000s ease-in-out 0s',
            },
            ':hover': {
              border: `1px solid ${customPalette.controls[mode].primaryHover}`,
            },
            '&.Mui-focused': {
              border: `1px solid ${customPalette.constant.blueberry.normal}`,
            },
            '&.Mui-error': {
              border: `1px solid ${customPalette.accent[mode].negative}`,
            },
            '.MuiInputAdornment-positionEnd': {
              marginRight: '8px',
              marginLeft: '0',
            },
            '.Mui-error': {
              borderColor: customPalette.accent[mode].negative,
            },
          },
          '.MuiIconButton-edgeEnd': {
            margin: '0',
          },
          '.MuiInputBase-adornedStart': {
            input: {
              paddingLeft: '4px',
            },
          },
          '.MuiFormHelperText-root': {
            margin: '8px 0 0',
            ...typographyRules.c1_Regular_Comp,
          },
          fieldset: {
            border: 'none',
          },
        },
      },
      variants: [
        {
          props: { size: 'xsmall' },
          style: {
            width: '100%',
            '.MuiInputBase-root': {
              height: '36px',
            },
            '.MuiInputAdornment-positionStart': {
              marginRight: '4px',
              marginLeft: '12px',
            },
          },
        },
        {
          props: { size: 'small' },
          style: {
            width: '100%',
            '.MuiInputBase-root': {
              height: '44px',
            },
            '.MuiInputAdornment-positionStart': {
              marginRight: '4px',
              marginLeft: '12px',
            },
          },
        },
        {
          props: { size: 'medium' },
          style: {
            width: '100%',
            '.MuiInputBase-root': {
              height: '52px',
            },
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...typographyRules.c1_Bold,
          backgroundColor: customPalette.constant.blueberry.dark,
          color: customPalette.constant.greyscale[0],
          borderRadius: 16,
          border: 'none',
          boxShadow: 'none',
          transition: 'transform 0.25s ease, background-color 0.15s ease',
          '&:hover': {
            backgroundColor: customPalette.constant.blueberry.normal,
            border: 'none',
            boxShadow: 'none',
          },
          '&:active': {
            transform: 'scale(0.96)',
          },
        },
        endIcon: {
          margin: 0,
        },
      },
      variants: [
        {
          props: { size: 'large' },
          style: {
            height: 52,
            padding: 14,
            borderRadius: 16,
          },
        },
        {
          props: { size: 'medium' },
          style: {
            height: 44,
            padding: 10,
            borderRadius: 16,
          },
        },
        {
          props: { size: 'small' },
          style: {
            height: 32,
            padding: 8,
            borderRadius: 12,
          },
        },
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: customPalette.constant.blueberry.dark,
            color: customPalette.constant.greyscale[0],
            '&:hover': {
              backgroundColor: customPalette.constant.blueberry.normal,
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: customPalette.controls[mode].tertiaryActive,
            color: customPalette.text[mode].primary,
            '&:hover': {
              backgroundColor: customPalette.background[mode].secondary,
            },
          },
        },
        {
          props: { variant: 'white' },
          style: {
            backgroundColor: customPalette.constant.greyscale[0],
            color: customPalette.constant.greyscale[900],
            '&:hover': {
              backgroundColor: customPalette.controls[mode].primaryHover,
            },
          },
        },
      ],
    },
    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: '200px',
          overflowY: 'scroll',
          overflowX: 'hidden',
        },
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
        divider: customPalette.controls.dark.stroke,
        primary: {
          main: customPalette.text.dark.primary,
          light: customPalette.constant.greyscale[0],
        },
        secondary: {
          main: customPalette.text.dark.secondary,
        },
        tertiary: {
          text: customPalette.text.dark.tertiary,
          icon: customPalette.text.dark.tertiary,
          main: customPalette.controls.dark.tertiaryActive,
        },
        inverted: {
          backgroung: customPalette.background.dark.inverted,
          text: customPalette.text.dark.inverted,
        },
        action: {
          active: customPalette.accent.dark.active,
          hover: customPalette.controls.dark.blur,
          disabledBackground: customPalette.background.dark.disabled,
        },
        error: {
          main: customPalette.accent.dark.negative,
          contrastText: customPalette.accent.dark.negativeInverted,
        },
        success: {
          main: customPalette.accent.dark.positive,
          contrastText: customPalette.accent.dark.positiveInverted,
        },
        warning: {
          main: customPalette.accent.dark.warning,
          contrastText: customPalette.accent.dark.warningInverted,
        },
        text: {
          primary: customPalette.text.dark.primary,
          secondary: customPalette.text.dark.secondary,
          disabled: customPalette.text.dark.inactiveTabbar,
          error: customPalette.text.dark.negative,
        },
        icons: {
          primary: customPalette.icons.dark.primary,
          secondary: customPalette.icons.dark.secondary,
          tertiary: customPalette.icons.dark.tertiary,
        },
        grey: {
          100: customPalette.constant.greyscale[100],
          200: customPalette.constant.greyscale[200],
          300: customPalette.constant.greyscale[300],
          400: customPalette.constant.greyscale[400],
          500: customPalette.constant.greyscale[500],
          600: customPalette.constant.greyscale[600],
          700: customPalette.constant.greyscale[700],
          800: customPalette.constant.greyscale[800],
          900: customPalette.constant.greyscale[900],
        },
        accent: customPalette.accent.dark,
        backgroundCustom: customPalette.background.dark,
        tabbar: {
          active: customPalette.controls.dark.activeTabbar,
          inactive: customPalette.controls.dark.inactiveTabbar,
        },
        constant: customPalette.constant,
        blur: customPalette.controls.dark.blur,
        inactive: customPalette.controls.dark.inactive,
        stroke: customPalette.controls.dark.stroke,
        alternative: customPalette.controls.dark.alternative,
      }
      : {
        divider: customPalette.controls.light.stroke,
        primary: {
          main: customPalette.text.light.primary,
          light: customPalette.constant.greyscale[0],
        },
        secondary: {
          main: customPalette.text.light.secondary,
        },
        tertiary: {
          text: customPalette.text.light.tertiary,
          icon: customPalette.text.light.tertiary,
          main: customPalette.controls.light.tertiaryActive,
        },
        inverted: {
          backgroung: customPalette.background.light.inverted,
          text: customPalette.text.light.inverted,
        },
        action: {
          active: customPalette.accent.light.active,
          hover: customPalette.controls.light.blur,
          disabledBackground: customPalette.background.light.disabled,
        },
        error: {
          main: customPalette.accent.light.negative,
          contrastText: customPalette.accent.light.negativeInverted,
        },
        success: {
          main: customPalette.accent.light.positive,
          contrastText: customPalette.accent.light.positiveInverted,
        },
        warning: {
          main: customPalette.accent.light.warning,
          contrastText: customPalette.accent.light.warningInverted,
        },
        text: {
          primary: customPalette.text.light.primary,
          secondary: customPalette.text.light.secondary,
          disabled: customPalette.text.light.inactiveTabbar,
          error: customPalette.text.light.negative,
        },
        icons: {
          primary: customPalette.icons.light.primary,
          secondary: customPalette.icons.light.secondary,
          tertiary: customPalette.icons.light.tertiary,
        },
        grey: {
          100: customPalette.constant.greyscale[100],
          200: customPalette.constant.greyscale[200],
          300: customPalette.constant.greyscale[300],
          400: customPalette.constant.greyscale[400],
          500: customPalette.constant.greyscale[500],
          600: customPalette.constant.greyscale[600],
          700: customPalette.constant.greyscale[700],
          800: customPalette.constant.greyscale[800],
          900: customPalette.constant.greyscale[900],
        },
        accent: customPalette.accent.light,
        backgroundCustom: customPalette.background.light,
        tabbar: {
          active: customPalette.controls.light.activeTabbar,
          inactive: customPalette.controls.light.inactiveTabbar,
        },
        constant: customPalette.constant,
        blur: customPalette.controls.light.blur,
        inactive: customPalette.controls.light.inactive,
        stroke: customPalette.controls.light.stroke,
      }),
  } as unknown as PaletteOptions,
}) as ThemeOptions
