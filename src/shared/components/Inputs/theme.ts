import { createTheme } from "@mui/material"

const getInputTheme = (textArea?:boolean) => {
    return createTheme({
        palette: {
            primary: {
              main: "#4B31A1",
            },
            secondary: {
              main: "#02947C",
            },
            error: {
              main: "#FF3D00"
            }
        },
        components: {
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        fontSize: "14px",
                        height: textArea ? "" : "30px",
                    },
                    
                }
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        fontSize: "14px"
                    }
                }
            }
        }
    })
}

export default getInputTheme;