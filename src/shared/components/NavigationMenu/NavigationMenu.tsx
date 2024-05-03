import React from "react";
import { Menu, MenuItem } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigationMenuItemsData : {label:string, path:string}[]= [
    {
        label:"Início",
        path:"/"
    },
    {
        label:"Imóveis",
        path:"/imoveis"
    },
    {
        label:"Contratos",
        path:"/contratos"
    },
    {
        label:"Financeiro",
        path:"/financeiro"
    }
]

export const NavigationMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const checkSelected = (path : string) : boolean=> {
        return location.pathname === path;
    }
    return(
        <Menu>
            {
                NavigationMenuItemsData.map(({label, path}, index) => (
                    <MenuItem 
                        key={index} 
                        onClick={() => navigate(path)} 
                        $selected={checkSelected(path)}
                    >
                        {label}
                    </MenuItem>
                ))
            }
        </Menu>
    )
}