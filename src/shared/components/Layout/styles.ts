import { Card, Grid } from "@mui/material";
import styled from "styled-components";

export const LayoutGrid = styled(Grid)`
    padding-top: 5vh;
`

export const SideDiv = styled.div`
    
`

export const LogoImg = styled.img`
    height: 60px;
    width: auto;
`

export const BaseCard = styled(Card)`
    padding: 30px 1vw;
`

export const MenuCard = styled(BaseCard)`
    position: relative;
    min-width: 100%;
    min-height: 260px;
`

export const BodyCard = styled(BaseCard)`
    position: relative;
    width: 100%;
    height: calc(90vh);
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8vw;
    flex-wrap: wrap;
    font-size: 20px;
    font-weight: 500;
    min-width: 100%;
    min-height: 130px;
`

