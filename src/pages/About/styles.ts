import styled from 'styled-components';


export const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    margin: auto;
    position: relative;
`;
export const Area = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon{
        margin: 1rem .5rem;
        font-size: 2rem;
        color: var(--c3);
        transition: .5s;
        
        &:hover{
            color: var(--c2);
            transform: scale(1.50);
        }
    }
`;
export const Title = styled.h1`
    margin: 1rem 1rem;
    width: 90%;
    display:flex;
    justify-content: center;
    align-items: center;
    color: var(--c2);
    
    `;
export const SubTitle = styled.h2`
    margin: .5rem;
    color: var(--c3);

    &:hover{
        color: var(--c2);
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const Flex = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`;