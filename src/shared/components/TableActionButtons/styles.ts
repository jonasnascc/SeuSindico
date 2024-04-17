import styled from "@emotion/styled";

export const ActionIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const IconTile = styled.div`
    cursor:pointer;
    color: #4B31A1;
`

export const DeleteIconTile = styled(IconTile)`
    &:hover {
        color: #FF3D00;
    }
`

export const ExpandButton = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    cursor:pointer;
`