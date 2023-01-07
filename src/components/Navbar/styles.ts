import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width:100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    height: ${props => props.extendNavbar ? "100vh" : "5vh"};
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    background: transparent;
    margin-bottom: 2rem;
    `; 
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin-bottom: 1rem;
    
    @media (min-width: 700px){
        display: none;
    }
    `; 

export const LeftContainer = styled.div`
    flex: 10%;         
    display:flex;
    align-items: center;
    margin-top: 2rem;
    transition: .5s;
    filter: drop-shadow(0 0 0 #fff);
    color: var(--blue1);
        
    &:hover{
        filter: drop-shadow(0 0 .5rem  var(--wht));
        color: var(--blue1);
        transform: scale(1.2);
        opacity: 60%;
    }

    @media (min-width: 700px){
        margin-right: .5rem;
    }
    @media (max-width: 700px){
        margin-top: 6rem;
    }
    `;

export const RightContainer = styled.div`
    flex: 20%;
    display:flex;
    justify-content: flex-end;
    margin-top: 1.6rem;
    margin-right: 2rem;
    font-size: 2rem;
    letter-spacing: -1.5px;
    @media (max-width: 700px){
        display: none;
        flex: 0%;
    }
    `;

export const MidContainer = styled.div`
    flex: 80%;         
    justify-content: space-around;
    align-items: center;
    
    @media (max-width: 700px){
        margin-top: 3.5rem;
        margin-left: 10rem;
    }
    `;


export const NavbarLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const NavbarLink = styled(Link)`
    color: var(--wht);
    font-size: large;
    text-decoration: none;
    margin-left: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    transition: .5s;
    
    @media (max-width: 700px){
        display: none;
    }
    
    &:hover{
        color: var(--blue5);
        opacity: 100%;
        transform: scale(1.4);
    }
`;


export const Logo = styled.img`
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
    margin-top: -1rem;
    padding: .5rem;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 0, 0,0, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
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
    color: var(--wht);
    font-size: 3rem;
    margin-top: 1rem;
    cursor: pointer;  
    filter: drop-shadow(6px 0px 27px #000);
    
    @media (min-width: 700px){
    display: none;
}
`;
export const NavbarLinkExtend = styled(Link)`
    color: var(--blue1);
    font-size: x-large;
    text-decoration: none;
    margin-top: 1rem;

    &:hover{
        color: #d9d9d9;
        opacity: 50%;
    }
`;
