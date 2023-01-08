import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    margin: 1rem .5rem;
`;
export const Area = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    `;
export const Balls = styled.div`
    display: flex;
`;
export const Ball = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items:center;
    text-align: center;
    justify-content:center;
    border-radius:100%;
    background: var(--glass);
    margin: 1rem;
`;
export const Link = styled.a`
    display: flex;
    align-items: center;

    .icon{
        font-size: 3rem;
        color: var(--blue1);
        transition: .5s;
        
        &:hover{
            color: var(--wht);
            border-radius:100%;
            transform: scale(1.50);
        }
    }
`;