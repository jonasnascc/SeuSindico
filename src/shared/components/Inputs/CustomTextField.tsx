import { TextField, TextFieldProps, ThemeProvider} from "@mui/material";
import React from "react";
import getInputTheme from "./theme";

type CustomTextFieldProps = {
    textArea?:boolean
}

export const CustomTextField = ({textArea, ...props} : TextFieldProps&CustomTextFieldProps) => {
    const theme = getInputTheme(textArea)
    return (
        <ThemeProvider theme={theme}>
            <TextField {...props}/>
        </ThemeProvider>
    )
}