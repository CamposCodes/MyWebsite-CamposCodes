import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
    width: 95%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: var(--color2);
    position: static;
    
    @media (min-width: 700px) {
        height: auto;
    }
    `;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin: .5rem 0;
    margin-top: 2rem;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 0, 0,0, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    border-radius: 10px; 
    border-radius: 1rem;
    `;
export const TextArea2 = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin: .5rem 0;
    margin-top: 2rem;
`;

export const Text = styled.p`
    width: 100%;
    text-align: start;
    margin: 0.5rem;
    font-size: 20px;
    color: #fff;
    `;
export const Text2 = styled.p`
    position: relative;
    width: 100%;
    text-align: start;
    margin: 0.5rem;
    font-size: 20px;
    color: #d5fafe;
    `;

export const Title = styled.h2`
    justify-content: flex-start;
    font-weight: normal;
    width: 100%;
`;
export const SubTitle = styled.h2`
    justify-content: center;
    text-align: center;
    font-weight: normal;
    width: 100%;
`;

export const Image = styled.img`
    width: 15rem;
    height: 15rem;
    justify-content: flex-start;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    min-heigh: 5rem;
    heigh: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export const LinkButton = styled(Link)`
    padding: 1rem;
    border-radius: 1rem;
    margin: .5rem;
    text-align: center;
    display: flex;
    
    &:hover{
    }
    
    .icon1{
        margin: 0 auto;
        font-size: 2.7rem;
        color: var(--color2);
        transition: .5s;
        filter: drop-shadow(0 0 0 #fff);
        color: #d5fafe;
        
        &:hover{
            filter: drop-shadow(0 0 2rem  #d5fafe);
            color: var(--color2);
            transform: scale(1.4);
        }
    }
    .icon2{
        margin: 0 auto;
        font-size: 2rem;
        color: #d5fafe;
        transition: .5s;
        filter: drop-shadow(0 0 0 #fff);
        
        &:hover{
            color: var(--color2);
            filter: drop-shadow(0 0 3rem  #d5fafe);
            transform: scale(1.4);
        }
    }
    
`;
