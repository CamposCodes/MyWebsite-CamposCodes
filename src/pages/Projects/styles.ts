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
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
    }
`;
export const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: var(--color2);
    justify-content: center;
    align-items: center;

`;
export const ProjectArea = styled.div`
    background: var(--c1);
    backdrop-filter: blur(15px) ;
    -webkit-backdrop-filter: blur(15px) ;

    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    object-fit: contain;

    &:hover{
        filter: drop-shadow(0 0 .5rem  var(--c3));
    }
    
    @media (max-width: 700px) {
        margin: auto 1rem auto 1rem;
        width: 80%;
    }
`;

export const ProjectLink = styled.a``;

export const ProjectContent = styled.p`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: var(--c3);
    font-size: 2rem;
    padding: 1rem;
    white-space: nowrap;
`;

export const Title = styled.h1`
    width: 95%;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 5rem;
    color: var(--c5);
`;

export const Top =  styled.div`
    width: 95%;
    display: flex;
    align-items:center;

    .icon{
        font-size:5rem;
        color: var(--c1);
    }
    .container {
        width: 100%;
        height: 15rem;
        display: flex;
        place-content: center;
        place-items: center;
        overflow: hidden;
        background: var(--c3);
        /* background: rgba(255, 255, 255, 0.2); */
        border-radius: 30px;
        margin: 2rem 0;
    }

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        background: transparent;
        border-radius: inherit;
    }

`;