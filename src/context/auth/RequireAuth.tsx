import React, { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = () => {
    const {authenticated} = useContext(AuthContext);

    if(!authenticated) {
        return <Navigate to="/login"/>;
    }
    else return (
        <Outlet/>
    )
}