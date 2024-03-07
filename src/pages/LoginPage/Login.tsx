import React, { useContext, useState } from "react";
import logo from "../../logo.svg"
import styled from "styled-components";
import { AuthContext } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleLoginButton = (event : any) => {
        event.preventDefault();
        
        if(login==="" || password === "" || !auth.signin(login, password)){
            handleError();
        } else {
            navigate("/");
        }
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
        <Login>
            <LoginForm method="POST" action="/api/auth/login" name="user">
                <Logo src={logo} alt="logo"/>
                <LoginText>Entre ou cadastre-se</LoginText>
                {showErrorMessage&&<ErrorMessage>Login ou senha incorretos!</ErrorMessage>}
                <input 
                    className="center-text" 
                    type="text" id="login" 
                    name="login" 
                    onChange={handleLoginInput}
                />
                
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
            </LoginForm>
        </Login>
    )
}

const Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    overflow: hidden;
`

const Logo = styled.img`
    height: 130px;
`

const LoginText = styled.h2`
    font-weight: 500;
    font-size: 1.4em;
`

const ErrorMessage = styled.span`
    font-size: 14px;
    color: red;
`

const LoginForm = styled.form`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1vh;
    width: 250px;
    overflow: hidden;
`