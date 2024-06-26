import React, { useContext, useEffect, useState } from "react";
import logo from "../../logo.svg"
import { AuthContext } from "../../context/auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthBody, AuthButton, AuthCard, AuthFormInput, ErrorMessage, Form, FormContainer, InputText, LoginText, Logo } from "../../shared/components/Auth/styles";

export const LoginPage = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLoginButton = async (event : any) => {
        event.preventDefault();
        if(login==="" || password === "" || !auth.signin(login, password)){
            handleError();
        } else if(await auth.signin(login, password)){
            navigate("/imoveis");
        } else handleError();
    }

    const handleSignupButton = (event:any) => {
        event.preventDefault();
        navigate("/signup")
    }
    
    const handleLoginInput = (event : any) => {
        setLogin(event?.target.value);
    }

    const handlePasswordInput = (event : any) => {
        setPassword(event?.target.value);
    }

    const handleError = () => {
        setShowErrorMessage(true);
    }
 
    if(auth.authenticated) return <Navigate to="/imoveis"/>
    else return ( 
        <Form method="POST" action="/api/auth/login" name="user">
            <Logo src={logo} alt="logo"/>
            <LoginText>Bem vindo ao SeuSindico. Entre ou cadastre-se.</LoginText>
            {showErrorMessage&&<ErrorMessage>Login ou senha incorretos!</ErrorMessage>}
            <InputText>Login</InputText>     
            <AuthFormInput 
                className="center-text" 
                type="text" id="login" 
                name="login" 
                onChange={handleLoginInput}
                placeholder="Digite seu email ou cpf"
            />

            <InputText>Senha</InputText>        
            <AuthFormInput 
                className="center-text" 
                type="password" 
                id="password" 
                name="password" 
                autoComplete="on" 
                onChange={handlePasswordInput}
                placeholder="Digite sua senha"
            />

            <AuthButton 
                $color = "primary"
                className="login full-width" 
                type="submit" 
                onClick={handleLoginButton}
            >
                Entrar
            </AuthButton>

            <AuthButton 
                $color = "secondary"
                className="signup full-width" 
                onClick={handleSignupButton}
            >
                Cadastre-se
            </AuthButton>
        </Form>
    )
}

