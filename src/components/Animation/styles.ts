import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    opacity:70%;
`;
export const Area = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    .animate{
        display: flex;
        margin-left: .5rem;
    }
    .line{ 
        display:flex;
    }
    `;
export const Animation = styled.div`


`;
export const Lines = styled.p`
    color: var(--c5);
    margin-left: 1rem;
`;