import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    `;
export const Area = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    .icon{
        margin: 1rem .5rem;
        font-size: 2rem;
        color: var(--color2);
        
        &:hover{
            color: var(--color3);
        }
    }
    `;
export const Title = styled.h1`
    margin: 1rem 1rem;
    width: 90%;
    justify-content: flex-start;
    color: #fff;
    `;
export const SubTitle = styled.h2`
    margin: .5rem;
    color: var(--color2);

    &:hover{
        color: var(--color3);
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
`