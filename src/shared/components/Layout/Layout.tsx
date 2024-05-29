import { Container, Grid } from "@mui/material";
import { BodyCard, LayoutGrid, LogoContainer, LogoImg, MenuCard, SideDiv } from "./styles";

import logo from "../../../logo.svg"
import { Outlet } from "react-router-dom";

export const hideNavBarPathList = [
    "/login",
    "/signup"
]

export const Layout = () => {
    // const {authenticated} = useContext(AuthContext);
    // const location = useLocation();
    // const hideNavBar = hideNavBarPathList.includes(location.pathname);
    // console.log(location.pathname)


    return (            
        <Container>
            <LayoutGrid container spacing={"1vw"}>
                <Grid item xs={12} sm={12} md={3}>
                    <SideDiv>
                        <LogoContainer>
                            <LogoImg src={logo} alt="logo"/>
                            SeuSindico
                        </LogoContainer>
                        <MenuCard></MenuCard>
                    </SideDiv>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <BodyCard>
                        <Outlet/>
                    </BodyCard>
                </Grid>
            </LayoutGrid>
        </Container>
    )
}


