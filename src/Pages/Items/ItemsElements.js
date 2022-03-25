import styled from 'styled-components';

export const ItemsContainer = styled.div`
    min-height: 100vh;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    background-color: darkgray;
`

export const ScrollingContainer = styled.div`
    height: 100%;
    padding: 32px;
    width: 100%;
    display: flex;    
    flex-direction: row;
    align-items: center;
    background-color: white;
    overflow-x: auto;
`

export const ScrollingItem = styled.div`
    height: 800px;
    min-width: 800px;
    display: flex;    
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 32px;
    background-color: darkgray;
`

export const ItemWrapper = styled.div`
    min-height: 100%;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 32px;
    background-color: black;
`

export const ItemImage = styled.div`
    height:320px;
    width:320px;
    background-color: red;    
`

export const ItemDetailWrapper = styled.div`
    display: flex;    
    flex-direction: column;
`

export const ItemsH1 = styled.h1`
    color: #fff;
    font-size: 72px;
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    
    @media screen end (max-width: 480px){
        font-size: 32px;
    }
`

export const ItemsH2 = styled.h2`
    color: #fff;
    font-size: 48px;
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    
    @media screen and (max-width: 768px){
        font-size: 32px;
    }
    
    @media screen end (max-width: 480px){
        font-size: 24px;
    }
`

export const ItemsP = styled.p`
    color: #fff;
    font-size: 24px;
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    
    @media screen end (max-width: 480px){
        font-size: 12px;
    }
`