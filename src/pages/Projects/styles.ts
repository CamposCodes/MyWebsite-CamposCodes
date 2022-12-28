import styled from "styled-components";

export const ContainerGrid = styled.section`
    width: 95%;
    box-sizing: border-box;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    color: var(--color2);

    @media (max-width: 700px) {
        height: auto;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`;
export const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: var(--color2);
    justify-content: center;
    align-items: center;

    @media (min-width: 700px){
        height: auto;
    }
`;
export const ProjectArea = styled.div`
    background: var(--color4);
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

export const ProjectLink = styled.a``;

export const ProjectContent = styled.p`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: var(--color2);
    font-size: 2rem;
    padding: 1rem;
    white-space: nowrap;
`;

export const Title = styled.h1`
    width: 95%;
    padding: 1rem;
    justify-content: flex-start;
    font-size: 3rem;
    font-weight: normal;
`;
