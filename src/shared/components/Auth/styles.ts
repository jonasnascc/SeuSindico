import styled from "styled-components"

export const InputText = styled.p`
    margin: 0;
`

export const AuthBody = styled.div`
    background-color: #10CCAD;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AuthCard = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    border-radius: 10px;
    width: 40vw;
    padding: 90px 0;
    background-color: white;
`

export const AuthButton = styled.button<{$color : "primary" | "secondary"}>`
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    background-color: ${
        props => props.$color==="primary" ? "#10CCAD" : "#4B31A1"
    };
    color: white;
    cursor: pointer;
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

export const Form = styled.form`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1vh;
    width: 45%;
    overflow: hidden;
`

export const AuthFormInput = styled.input`
    height: 30px;
`

export const AuthFormSelect = styled.select`
    height: 30px;
`

export const Logo = styled.img`
    height: 115px;
`

export const LoginText = styled.h2`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
`

export const ErrorMessage = styled.span`
    font-size: 14px;
    color: red;
`

export const BackButtonDiv = styled.div`
    position: absolute;
    top: 2vh;
    left: 2vh;
    color: #4B31A1;
    cursor: pointer;
`
