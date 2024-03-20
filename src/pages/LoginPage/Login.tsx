import React, { useContext, useEffect, useState } from "react";
import logo from "../../logo.svg"
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Form, FormContainer, InputText, LoginText, Logo } from "../../shared/components/Auth/styles";

export const LoginPage = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        if(auth.authenticated) navigate("/");
    },[])

    const handleLoginButton = async (event : any) => {
        event.preventDefault();
        if(login==="" || password === "" || !auth.signin(login, password)){
            handleError();
        } else if(await auth.signin(login, password)){
            navigate("/");
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
 
    return ( 
        <FormContainer>
            <Form method="POST" action="/api/auth/login" name="user">
                <Logo src={logo} alt="logo"/>
                <LoginText>Entre ou cadastre-se</LoginText>
                {showErrorMessage&&<ErrorMessage>Login ou senha incorretos!</ErrorMessage>}
                <InputText>Email ou CPF</InputText>     
                <input 
                    className="center-text" 
                    type="text" id="login" 
                    name="login" 
                    onChange={handleLoginInput}
                />

                <InputText>Senha</InputText>        
                <input 
                    className="center-text" 
                    type="password" 
                    id="password" 
                    name="password" 
                    autoComplete="on" 
                    onChange={handlePasswordInput}
                />

                <button 
                    className="login full-width" 
                    type="submit" 
                    onClick={handleLoginButton}
                >
                    Entrar
                </button>

                <button 
                    className="signup full-width" 
                    onClick={handleSignupButton}
                >
                    Cadastre-se
                </button>
            </Form>
        </FormContainer>
    )
}

