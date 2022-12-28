import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width:100%;
    background: var(--color5);
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    justify-content: space-between;
    height: ${props => props.extendNavbar ? "100vh" : "4rem"};
    padding: 0;
    
    @media(min-width: 700px){
        border: solid 1px var(--color2);
        border-width: 0px 0px 1px 0px;
        height: 80px;
    }
    `;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    background: var(--color5);
    `; 
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    
    @media (min-width: 700px){
        display: none;
    }
    `; 

export const LeftContainer = styled.div`
    flex: 80%;         
    display:flex;
    align-items: center;
    `;
export const RightContainer = styled.div`
    flex: 20%;
    display:flex;
    justify-content: flex-end;
    
    @media (min-width: 700px){
        margin-right: .5rem;
    }
`;


export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const NavbarLink = styled(Link)`
    color: var(--color2);
    font-size: x-large;
    text-decoration: none;
    margin: 2rem  1rem 1rem 1rem;

    @media (max-width: 700px){
    display: none;
    }

    &:hover{
        color: var(--color3);
    }
`;


export const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    margin: 0;

    @media (max-width: 700px){
        margin: .6rem 0;
    }
`;

export const OpenLinksButton = styled.button`
    width: 5rem;
    height: 2rem;
    background: none;
    border: none;
    color: var(--color2);
    font-size: 3rem;
    margin-top: 1rem;
    cursor: pointer;  
    
    @media (min-width: 700px){
    display: none;
}
`;
export const NavbarLinkExtend = styled(Link)`
    color: var(--color2);
    font-size: x-large;
    text-decoration: none;
    margin-top: 1rem;

    &:hover{
        color: var(--color3);
    }
`;
