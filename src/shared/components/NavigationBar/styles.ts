import styled from "styled-components";

export const Bar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 80px;
    width: 100%;
    background-color: #fbfbfb;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;

    height: 100%;
`

export const LogoText = styled.h1`
    font-size: 20px;
    font-weight: 600;
`

export const Logo = styled.img`
    height: 38px;
`