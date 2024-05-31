import styled from "styled-components";

export const Building = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 100px;
    max-width: 300px;
`

export const EspacoBlock = styled.div`
    flex: 1;
    background-color: #10CCAD;
`

export const LevelBlock = styled.div`
    display: flex;
    gap: 1%;
    height: 10px;
    width: 100%;
`

export const GroundLevel = styled.div`
    min-width: 100px;
    width: 100%;
    height: 20px;
    background-color: gray;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: grey;
    clip-path: polygon(0 100%, 100% 100%, 95% 0, 5% 0);

`