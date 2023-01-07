import styled from 'styled-components';

export const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    position:relative;
`;

export const Area = styled.div`
    width: 20rem;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    padding: 1rem;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 0, 0,0, 0.37 );
    backdrop-filter: blur( 1.5px );
    -webkit-backdrop-filter: blur( 1.5px );
    border-radius: 1rem;
`;

export const Form = styled.form`
    label{
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        font-size: 1rem;
        font-weight: normal;
    }
    input{
        margin-top: .5rem;
        margin
        width: 20rem;
        height: 2rem;
        border-radius: .5rem;
        border: none;
        background: transparent;
        box-shadow: 0 8px 32px 0 rgba( 0, 0,0, 0.97 );
        color: #ffff;
        opacity: 20%;
        
        
        &::placeholder{
            padding-left: 1rem;
        }
    }
    textarea{
        margin-top: .5rem;
        width: 20rem;
        height: 5rem;
        border-radius: .5rem;
        border: none;
        background: transparent;
        opacity: 20%;
        box-shadow: 0 8px 32px 0 rgba( 0, 0,0, 0.97 );
        color: #fff;

        &::placeholder{
            padding: .5rem;
            color: var(--c4);
            text-align: center;
            padding-top: 1rem;
        }
    }
    textarea:focus, input:focus {
        opacity: 100%;
        outline: 0;
    }
`;
