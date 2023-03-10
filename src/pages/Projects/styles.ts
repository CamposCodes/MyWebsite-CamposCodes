import styled from "styled-components";

export const ContainerGrid = styled.section`
    width: 95%;
    box-sizing: border-box;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, .5fr);
    grid-template-rows: repeat(4, .5fr);
    color: var(--wht);


    @media (max-width: 700px) {
        height: auto;
        grid-template-columns: repeat(1, .5fr);
        grid-template-rows: repeat(1, .5fr);
    }
`;
export const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: var(--wht);
    justify-content: center;
    align-items: center;
    position:relative;
`;
export const ProjectArea = styled.div`
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );

    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    height: 200px;
    object-fit: contain;


    &:hover{
        background: var(--blue1);
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
    color: var(--wht);
    font-size: 2rem;
    padding: 1rem;
    word-wrap: break-word;
    
    &:hover{
        opacity: 80%;
    }
`;

export const Title = styled.h1`
    width: 95%;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 5rem;
    color: var(--wht);
    position: inherit;
`;

export const Top =  styled.div`
    width: 95%;
    display: flex;
    align-items:center;
    
    .icon{
        font-size:5rem;
        color: var(--blue3);
        &:hover{
            cursor:grab;
        }
    }
    .container {
        width: 100%;
        height: 15rem;
        display: flex;
        place-content: center;
        place-items: center;
        overflow: hidden;
        background: rgba( 255, 255, 255, 0.15 );
        box-shadow: 0 8px 32px 0 rgba( 0, 0,0, 0.20 );
        backdrop-filter: blur( 1.5px );
        -webkit-backdrop-filter: blur( 1.5px );
        border-radius: 1rem;
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

export const SubTitle = styled.p`
    color: var(--blue2);
    text-shadow:1px 1px 1px var(--blue5);
    font-size: x-large;
    position: static;
    margin-top:.7rem;
`;