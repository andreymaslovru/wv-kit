import { CSSProperties } from 'react'
import { PaletteOptions } from '@mui/material/styles'

interface ColorPalette {
  darkest: CSSProperties['color'];
  dark: CSSProperties['color'];
  normal: CSSProperties['color'];
  light: CSSProperties['color'];
  lightest: CSSProperties['color'];
}

interface ColorConstants {
  greyscale: Record<string, CSSProperties['color']>;
  blackberry: ColorPalette;
  blueberry: ColorPalette;
  mint: ColorPalette;
  apple: ColorPalette;
  lime: ColorPalette;
  banana: ColorPalette;
  orange: ColorPalette;
  raspberry: ColorPalette;
  cranberry: ColorPalette;
  plum: ColorPalette;
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true,
    secondary: true,
    white: true,
  }

}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends PaletteOptions {
    icons: {
      primary: CSSProperties['color'],
      secondary: CSSProperties['color'],
      tertiary: CSSProperties['color'],
    }
    backgroundCustom: {
      primary: CSSProperties['color'],
      primaryElevated: CSSProperties['color'],
      lower: CSSProperties['color'],
      secondary: CSSProperties['color'],
      secondaryElevated: CSSProperties['color'],
      modal: CSSProperties['color'],
      stroke: CSSProperties['color'],
      strokeDisabled: CSSProperties['color'],
      overlay: CSSProperties['color'],
      inverted: CSSProperties['color'],
      hover: CSSProperties['color'],
      bar: CSSProperties['color'],
      disabled: CSSProperties['color'],
    }
    accent: {
      active: CSSProperties['color']
      activeInverted: CSSProperties['color']
      negative: CSSProperties['color']
      negativeInverted: CSSProperties['color']
      positive: CSSProperties['color']
      positiveInverted: CSSProperties['color']
      warning: CSSProperties['color']
      warningInverted: CSSProperties['color']
    },
    tertiary: {
      text: CSSProperties['color']
      icon: CSSProperties['color']
      main: CSSProperties['color']
    },
    tabbar: {
      active: CSSProperties['color'],
      inactive: CSSProperties['color']
    }
    constant: ColorConstants
    blur: CSSProperties['color']
    inactive: CSSProperties['color']
    stroke: CSSProperties['color']
    alternative: CSSProperties['color']
  }
}

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    c1_Regular_Comp: CSSProperties;
    c1_Medium: CSSProperties;
    c1_Bold: CSSProperties;
    c2_Bold: CSSProperties;
    h2_Comp: CSSProperties;
    h3_Comp: CSSProperties;
    h4_Comp: CSSProperties;
    p2_Regular_Comp: CSSProperties;
    p2_Regular_Text: CSSProperties;
    p3_Comp: CSSProperties;
    p3_Medium: CSSProperties;
    p3_Regular_Text: CSSProperties;
    p4_Medium: CSSProperties;
    p4_Regular_Comp: CSSProperties;
    p4_bold_upp_wide: CSSProperties;
    p4_med_upp_wide: CSSProperties;
    Promo2: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    c1_Regular_Comp: true;
    c1_Medium: true;
    c1_Bold: true;
    c2_Bold: true;
    h2_Comp: true;
    h3_Comp: true;
    h4_Comp: true;
    p2_Regular_Comp: true;
    p2_Regular_Text: true;
    p3_Comp: true;
    p3_Medium: true;
    p3_Regular_Text: true;
    p4_Medium: true;
    p4_Regular_Comp: true;
    p4_med_upp_wide: true;
    Promo2: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    xsmall: true;
    small: true;
    medium: true;
    large: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true,
    secondary: true,
    white: true,
  }
}
