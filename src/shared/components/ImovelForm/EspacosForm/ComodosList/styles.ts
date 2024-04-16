import styled from "styled-components";

export const DetailsContainer = styled.div`
 word-break: break-all;
`

export const SubHeader = styled.div`
    font-weight: 500;
    font-size: 18px;
    color: #02947C;
    margin-bottom: 5px;
`

export const ComodosTags = styled.div`
    display: flex;
    gap: .5vw;
    flex-wrap: wrap;
`

export const ComodoTag = styled.button`
    background-color: #10CCAD;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    word-break: keep-all;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

export const AddComodoTag = styled(ComodoTag)`
    background-color: #4B31A1;
`