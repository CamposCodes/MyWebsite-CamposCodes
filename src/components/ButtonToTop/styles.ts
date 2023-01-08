import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        margin:1rem;
        padding: .5rem 1rem;
        background: var(--blue1);
        color: var(--wht);
        font-size:.8rem;
        border: none;
        border-radius: 1rem;

        &:hover{
            background: var(--blue5);
            cursor: pointer;
        }
    }
`;