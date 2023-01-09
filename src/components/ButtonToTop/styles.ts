import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        text-shadow: 1px 1px 25px var(--blue1);
        margin:1rem;
        padding: .5rem 1rem;
        background: transparent;
        color: var(--wht);
        font-size: 1rem;
        border: none;
        border-radius: 1rem;
        transition: .5s;

        &:hover{
            transform: scale(1.2);
            color: var(--blue2);
            cursor: pointer;
        }
    }
`;