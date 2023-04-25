import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
  min-width: 100%;
  heigh: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkButton = styled(Link)`
  padding: 1rem;
  border-radius: 1rem;
  margin: 0.5rem;
  text-align: center;
  display: flex;

  &:hover {
  }

  .icon1 {
    margin: 0 auto;
    font-size: 2.7rem;
    color: var(--wht);
    transition: 0.5s;
    filter: drop-shadow(0 0 0 var(--wht));
    color: var(--blue1);

    &:hover {
      filter: drop-shadow(0 0 2rem var(--blue1));
      color: var(--wht);
      transform: scale(1.4);
    }
  }
  .icon2 {
    margin: 0 auto;
    font-size: 2rem;
    color: var(--blue1);
    transition: 0.5s;
    filter: drop-shadow(0 0 0 var(--wht));

    &:hover {
      color: var(--wht);
      filter: drop-shadow(0 0 3rem var(--blue1));
      transform: scale(1.4);
    }
  }
`;

export const Container = styled.section`
  width: 95%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  color: var(--wht);
  position: static;

  @media (max-width: 700px) {
    height: auto;
    width: 100%;
  }
`;

export const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 1rem;
`;
export const TextArea2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 2rem;
`;
export const TextArea3 = styled.div`
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextArea4 = styled.div`
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextArea5 = styled.div`
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Text = styled.p`
  width: 100%;
  text-align: start;
  margin: 0.5rem;
  font-size: 20px;
  color: var(--wht);
`;
export const Text2 = styled.p`
  position: relative;
  width: 100%;
  text-align: start;
  margin: 0.5rem;
  font-size: 20px;
  color: var(--wht);
`;

export const Title = styled.h2`
  justify-content: flex-start;
  font-weight: normal;
  width: 100%;
  margin-bottom: 0.5em;
`;
export const Title2 = styled.h2`
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
  font-weight: normal;
  width: 100%;
`;
export const SubTitle = styled.h2`
  justify-content: center;
  text-align: center;
  font-weight: normal;
  width: 100%;
`;

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 1rem 0.5rem;
  justify-content: flex-start;
  border-radius: 100%;
`;
