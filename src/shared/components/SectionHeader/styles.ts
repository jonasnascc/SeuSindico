import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const HeaderBody = styled.div`
    position: relative;
`

export const Label = styled.h1`
    display: flex;
    align-items: center;
    gap: .5vw;
    font-size: 18px;
    font-weight: 500;
`

export const BackIcon = styled(ArrowBackIcon)`
    cursor: pointer;

    &:hover {
        transition: color .3s linear;
        color: #10CCAD;
    }
`

export const SideItems = styled.div`
    display: flex;
    position: absolute;
    align-items: end;
    justify-content: end;
    top: 0;
    gap: 8px;
    flex-wrap: wrap;
    width: 100%;
`

