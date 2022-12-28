import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width:100%;
    background: var(--color5);
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    justify-content: space-around;
    height: ${props => props.extendNavbar ? "100vh" : "5vh"};
    
    @media(min-width: 700px){
        border: solid 1px var(--color2);
        border-width: 0px 0px 1px 0px;
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
    height: 100vh;
    
    @media (min-width: 700px){
        display: none;
    }
`; 

export const LeftContainer = styled.div`
    flex: 10%;         
    display:flex;
    align-items: center;
    margin-top: 2rem;

    @media (min-width: 700px){
        margin-right: .5rem;
    }
`;

export const RightContainer = styled.div`
    flex: 20%;
    display:flex;
    justify-content: flex-end;
`;

export const MidContainer = styled.div`
    flex: 60%;         
    justify-content: space-around;
    align-items: center;
`;


export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const NavbarLink = styled(Link)`
    color: var(--color2);
    font-size: x-large;
    text-decoration: none;
    margin-left: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    
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
    margin: 2rem;
    background: var(--color4);
    padding: .5rem;
    border-radius: 0 0 50% 50%;

    @media (max-width: 700px){
        margin: .6rem 0;
        margin-right: 2rem;
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
    filter: drop-shadow(6px 0px 27px #000);
    
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
