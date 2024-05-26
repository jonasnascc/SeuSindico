import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const CollapsableDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 5px;
    color: #02947C;
    gap: 10px;
    cursor: pointer;

    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: #4B31A1;
    }
`

export const UserAvatar = styled(Avatar)<{size:string}>`
    ${props => `height: ${props.size} !important; width: ${props.size} !important;`}
`

export const Username = styled.span`
    font-weight: 500;
`

export const ExpandMoreTile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
` 

export const ExpandedDiv = styled.div`
    position: absolute;
    background-color: white;
    top: 50px;
    width: 100%;
    min-height: 50px;
`