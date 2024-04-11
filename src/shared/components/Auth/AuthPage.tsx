import React from "react";
import { AuthBody, AuthCard, BackButtonDiv } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AuthPage = () => {
    const navigate = useNavigate();
    
    const handleClickBackButton = () =>{
        navigate(-1);
    }

    return (
        <AuthBody>
            <AuthCard>
                <BackButtonDiv onClick={handleClickBackButton}>
                    <ArrowBackIcon/>
                </BackButtonDiv>
                <Outlet/>
            </AuthCard>
        </AuthBody>
    )
}