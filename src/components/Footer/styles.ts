import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const BackToTop = styled.div`
    margin-top: .2rem;
`;
export const Redes = styled.div`
    display: flex;
    align-items: center;
    
    .icon{
        font-size: 1.2rem;
        margin-left: 1rem;
        margin-bottom: .5rem;
        cursor: pointer;
        transition: .5s;

        &:hover{
            transform: scale(1.2);
            color: var(--blue5);

        }
    }
`;
export const Logo = styled.img`
    width: 4rem;
    heigh: 4rem;
    margin-right: 1rem;
    margin-bottom: .6rem;
    transition: .5s;
    
    &:hover{
        transform: scale(-1.1);
        opacity: 50%;
    }

`;
export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
`; 
export const LinkTo = styled(Link)`
    margin-left: 1rem;
    margin-bottom: .6rem;
    font-size: 1rem;
    transition: .5s;
    
    &:hover{
        transform: scale(1.2);
        color: var(--blue1);

    }
`; 