import styled from "styled-components";

export const Container = styled.section`
    width: 95%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: var(--color2);

    @media (min-width: 700px) {
      height: auto;
    }
`;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
    background: var(--color4);
    border-radius: 1rem;
    width: 100%;
    height: auto;
`;

export const Text = styled.p`
    width: 100%;
    text-align: start;
    margin: 0.5rem;
    font-size: 20px;
`;

export const Title = styled.h2`
    justify-content: flex-start;
    font-weight: normal;
    width: 100%;
`;

export const Image = styled.img`
    width: 10rem;
    height: 10rem;
    justify-content: flex-start;
`;
