import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.backgroundBody};
  }
`;

export const GridDiv = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: ${(props) =>
    props.repeatFormula ? props.repeatFormula : "1fr 1fr"};

  @media (max-width: 1000px) {
    grid-template-columns: ${(props) =>
      props.repeatFormula ? props.repeatFormula : "1fr"};
  }
`;
