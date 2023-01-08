import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh; 
    height: auto; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
    color: var(--wht);
    
    @media (min-width: 700px) {
        height: auto;
    }

`;


export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 1rem 0;
    border-radius: 1rem;
`;

export const Text = styled.p`
    width: 50%;
    text-align: center;
    font-size: 2rem;
    color: var(--wht);
    margin: 3rem .5rem;
`;

export const FormArea = styled.div`
    margin: 0;
    padding: 0;
`;