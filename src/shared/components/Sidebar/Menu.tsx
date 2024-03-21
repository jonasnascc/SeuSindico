
import React from "react"
import { MenuItem, MenuList } from "./styles"
import { SidebarMenuItem } from "./MenuItem"

export const menuItems : any[] = [
    {
        label : "Inicio",
        path : "/"
    },
    {
        label : "Meu perfil",
        path : "/perfil"
    },
    {
        label : "Imóveis",
        path : "/imoveis"
    },
    {
        label : "Contratos",
        path : "/contratos"
    },
    {
        label : "Financeiro",
        path : "/financeiro"
    },
]

export const Menu = () => {
    return (
        <MenuList>
        {
            menuItems.map(({label, path}, index) => (
               <SidebarMenuItem key={index} label={label} path={path}/>
            ))
        }
        </MenuList>
    )
}