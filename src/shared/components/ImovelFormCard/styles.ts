import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    margin: 20px;

    min-height: 280px;

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-height: 30px;
    flex: 1;
        
    font-weight: 500;
    font-size: 18px;
    color: #02947C;
    text-align: center;

    padding: 20px 10px;
    width: 100%;
`

export const CardBody = styled.div`
    padding: 1vw;
    height: 100%;
    min-height: 250px;
`

export const CardFooter = styled.div`
    min-height: 40px;
`