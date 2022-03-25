import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 120px;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    background-color: black;
`

export const FooterH2 = styled.h2`
    color: #fff;
    font-size: 48px;
    text-align: center;
    
    @media screen and (max-width: 768px){
        font-size: 30px;
    }
    
    @media screen end (max-width: 480px){
        font-size: 24px;
    }
`