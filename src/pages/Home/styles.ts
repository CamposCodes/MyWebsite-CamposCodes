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

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .5rem 0;
    background: var(--color4);
    border-radius: 1rem;
`;

export const Text = styled.p`
    text-align: start;
`;

export const Title = styled.h2`
    text-align: start;
    font-weight: normal;
`;

export const Image = styled.img`
    width: 6rem;
    height: 6rem;

    @media(min-width: 700px){
        width: 10rem;
        height: 10rem;
    }
`;