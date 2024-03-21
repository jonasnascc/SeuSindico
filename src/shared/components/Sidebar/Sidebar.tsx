import React, { useContext }  from "react";
import { Bar, UsuarioLabel, UsuarioTile } from "./styles";
import { AuthContext } from "../../../context/auth/AuthContext";
import { Avatar, Divider, Grid } from "@mui/material";
import { Menu } from "./Menu";

export const Sidebar = () => {
    const {user} = useContext(AuthContext)

    return (
        <Bar>
            <UsuarioTile>
                <Avatar sx={{height: "75px", width: "75px"}}/>
                <UsuarioLabel>{user?.nome??""}</UsuarioLabel>
            </UsuarioTile>
            <Menu/>
        </Bar>
    );
}