import styled from 'styled-components';

export const ItemsContainer = styled.div`
    min-height: 100vh;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    background-color: black;
`

export const ItemsH1 = styled.h1`
    color: #fff;
    font-size: 72px;
    text-align: center;
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    
    @media screen end (max-width: 480px){
        font-size: 32px;
    }
`