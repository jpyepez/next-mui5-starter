import { createTheme } from '@mui/material'
import { Theme as MuiTheme } from '@mui/material'

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                html,
                body,
                #__next {
                    height: 100%;
                }

                #__next {
                    background-color: #e0e0e0;
                    display: grid;
                    place-items: center;
                }
            `,
        },
    },
})

export default theme
