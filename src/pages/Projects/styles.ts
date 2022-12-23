import styled from 'styled-components';

export const Container = styled.section`
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    color: var(--color2);

    @media(min-width: 700px){
        height: auto;
    }
`;
export const ProjectArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .5rem 0;
    background: var(--color4);
    border-radius: 1rem;
`;
export const ProjectImage = styled.img`
        width: 6rem;
    height: 6rem;

    @media(min-width: 700px){
        width: 10rem;
        height: 10rem;
    }
`;
export const ProjectLink = styled.a``;
