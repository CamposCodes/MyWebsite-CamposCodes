import styled from 'styled-components';

export const Container = styled.section`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    color: var(--color2);
    
    @media(min-width: 700px){
        height: auto;
    }
    `;
export const ProjectArea = styled.div`
    background: var(--color4);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 95%;
    margin: .5rem 0;
`;

export const ProjectLink = styled.a`  
`;

export const ProjectContent = styled.p`
    text-decoration: none;
    color:inherit;
    width: 100%;
    height: 100%;
    text-align: center;
    color:var(--color2);
    font-size: 2rem;
    padding: .5rem 0;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: normal;
    margin: 1rem;

`;
