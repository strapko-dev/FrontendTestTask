import { PaletteColorOptions, createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        filterButton: {
            main: '#FB9400',
            contrastText: '#fff'
        },

        colorsTextBlack: {
            main: '#212121',
        },
        colorsTextGrey: {
            main: '#424242',
        },
        colorsTextGreyLight: {
            main: '#757575',
        },
        colorsOrange: {
            main: '#FB9400',
        },
        colorsBg: {
            main: '#F5F5F5',
        },
        colorsUiBase: {
            main: '#FFFFFF',
        },
    },

    typography: {
        fontFamily: "Urbanist, sans-serif",

        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,

        fsSm: '14px',
        fsMd: '16px',
        fsXl: '18px',
        fs2Xl: '24px',
    },
})

declare module '@mui/material/styles' {
    interface Palette {
        filterButton: Palette['primary'];

        colorsTextBlack: Palette['primary'];
        colorsTextGrey: Palette['primary'];
        colorsTextGreyLight: Palette['primary'];
        colorsOrange: Palette['primary'];
        colorsBg: Palette['primary'];
        colorsUiBase: Palette['primary'];

        shadow: Palette['primary'];
    }

    interface PaletteOptions {
        filterButton?: PaletteColorOptions;

        colorsTextBlack?: PaletteColorOptions;
        colorsTextGrey?: PaletteColorOptions;
        colorsTextGreyLight?: PaletteColorOptions;
        colorsOrange?: PaletteColorOptions;
        colorsBg?: PaletteColorOptions;
        colorsUiBase?: PaletteColorOptions;

        shadow?: PaletteColorOptions;
    }

    interface TypographyVariants {
        fsSm: string;
        fsMd: string,
        fsXl: string,
        fs2Xl: string,
    }
    interface TypographyVariantsOptions {
        fsSm?: string;
        fsMd?: string,
        fsXl?: string,
        fs2Xl?: string,
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        filterButton: true;
    }
}