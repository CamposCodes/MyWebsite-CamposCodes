import styled from 'styled-components';


export const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    justify-content: center;
`;
export const Area = styled.div`
    width: 100%;
    align-items: center;

    .icon{
        font-size: 3rem;
        color: var(--wht);
        transition: .5s;
        margin-left: 2.5rem;
        margin-top: 2rem;
        
        &:hover{
            color: var(--blue1);
            transform: scale(1.50);
        }
    }
`;
export const Title = styled.h1`
    margin-top:-25rem;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    color: var(--wht);
    font-size: 3rem;
    
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
`;

export const Flex = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`;