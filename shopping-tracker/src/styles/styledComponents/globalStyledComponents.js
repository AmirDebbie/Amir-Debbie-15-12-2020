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

export const searchInputProps = {
  dark: { color: "#DFDFDF", backgroundColor: "#222" },
};

export const inputProps = {
  dark: { color: "#DFDFDF" },
};

export const searchInputLabelProps = {
  dark: { color: "#DFDFDF" },
};
