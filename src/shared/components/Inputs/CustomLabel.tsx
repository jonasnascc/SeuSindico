import React from "react"
import { InputLabel, InputLabelProps, ThemeProvider } from "@mui/material"
import getInputTheme from "./theme"

export const CustomInputLabel = (props : InputLabelProps) => {
    const theme = getInputTheme()

    return (
        <ThemeProvider theme={theme}>
            <InputLabel {...props}/>
        </ThemeProvider>
    )
}