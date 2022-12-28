import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background: var(--color5);
    color: var(--color2);
`;

export const Area = styled.div`
    margin: auto;
    max-width: 100vw;
    min-width: 99vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;
export const Page = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem .5rem;
`;