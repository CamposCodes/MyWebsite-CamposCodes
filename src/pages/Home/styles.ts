import styled from 'styled-components';

export const Container = styled.section`
    width: 95%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    color: var(--color2);

    @media(min-width: 700px){
        height: auto;
    }
`;

export const TextArea = styled.div`
    display: flex;
    align-items: center;
    margin: .5rem 0;
    background: var(--color4);
    border-radius: 1rem;
    width: 100%;
    height: auto;
    padding: 0;
`;
    
export const Text = styled.p`
    width: 80%;
    text-align: start;
    margin: .5rem;
    margin-top: 0;
    font-size: 20px;
`;
    
export const Title = styled.h2`
    justify-content: flex-start;
    font-weight: normal;
    margin: .5rem 8rem;
    width: 100%;

    @media(min-width: 700px){
        margin: .5rem 1.5rem;
    }
`;
    
export const Image = styled.img`
    width: 15%;
    height: 12rem;
    justify-content: flex-start;

`;