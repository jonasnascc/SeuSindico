import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../logo.svg"
import { Form, FormContainer, InputText, LoginText, Logo } from "../../shared/components/Auth/styles";
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

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
        role : ""
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
 

    return (
        <FormContainer>
            <Form method="POST" action="/auth/signup" onChange={handleChange}>
                <Logo src={logo} alt="logo"/>
                <LoginText>Cadastre-se</LoginText>

                <InputText>Nome</InputText>     
                <input 
                    className="center-text" 
                    type="text" id="nome" 
                    name="nome" 
                    onChange={() => null}
                />

                <InputText>Email</InputText>     
                <input 
                    className="center-text" 
                    type="text" id="email" 
                    name="email" 
                    onChange={() => null}
                />

                <InputText>CPF</InputText>     
                <input 
                    className="center-text" 
                    type="text" id="cpf" 
                    name="cpf" 
                    onChange={() => null}
                />

                <InputText>Senha</InputText>        
                <input 
                    className="center-text" 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    autoComplete="on" 
                    onChange={() => null}
                />
 
                <InputText>Tipo de usuário</InputText>
                <select defaultValue={"OCUPANTE"} name="role">
                    <option value={"OCUPANTE"}>Ocupante</option>
                    <option value={"PROPRIETARIO"}>Proprietario</option>
                </select>

                <button 
                    className="signup full-width" 
                    onClick={handleSubmit}
                >
                    Cadastrar
                </button>
            </Form>
        </FormContainer>
    )
}
