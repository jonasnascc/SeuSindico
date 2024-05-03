import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../logo.svg"
import { AuthButton, AuthFormInput, AuthFormSelect, Form, FormContainer, InputText, LoginText, Logo } from "../../shared/components/Auth/styles";
import { AuthContext } from "../../context/auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const SignupPage = () => {
    const {signup, authenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(authenticated) navigate("/");
    },[authenticated])

    const [formData, setFormData] = useState({
        nome : "",
        email : "",
        cpf : "",
        senha: "",
        role : "OCUPANTE"
    });

    const handleChange = (event : any) => {
        setFormData(
            {
                ...formData,
                [event.target.name] : event.target.value
            }
        )
    }

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        
        if(await signup(
                formData.nome,
                formData.cpf,
                formData.email,
                formData.senha,
                formData.role
            )
        ) {
            navigate("/");
        }
        
    }
 

    if(authenticated) return <Navigate to="/imoveis"/>
    else return (
        <Form method="POST" action="/auth/signup" onChange={handleChange}>
            <Logo src={logo} alt="logo"/>
            <LoginText>Cadastre-se</LoginText>

            <InputText>Nome</InputText>     
            <AuthFormInput 
                className="center-text" 
                type="text" 
                id="nome" 
                name="nome" 
                onChange={() => null}
                placeholder="Digite seu nome completo"
            />

            <InputText>Email</InputText>     
            <AuthFormInput 
                className="center-text" 
                type="text" id="email" 
                name="email" 
                onChange={() => null}
                placeholder="Digite seu email"
            />

            <InputText>CPF</InputText>     
            <AuthFormInput 
                className="center-text" 
                type="text" id="cpf" 
                name="cpf" 
                onChange={() => null}
                placeholder="Digite seu cpf"
            />

            <InputText>Senha</InputText>        
            <AuthFormInput 
                className="center-text" 
                type="password" 
                id="senha" 
                name="senha" 
                autoComplete="on" 
                onChange={() => null}
                placeholder="Digite sua senha"
            />

            <InputText>Tipo de usuário</InputText>
            <AuthFormSelect defaultValue={"OCUPANTE"} name="role">
                <option value={"OCUPANTE"}>Ocupante</option>
                <option value={"PROPRIETARIO"}>Proprietario</option>
            </AuthFormSelect>

            <AuthButton
                $color="secondary"
                className="signup full-width" 
                onClick={handleSubmit}
            >
                Cadastrar
            </AuthButton>
        </Form>
    )
}
