import styled, { css, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import ToolBar from "@material-ui/core/ToolBar";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.backgroundBody};
  }
`;

export const H1 = styled.h1`
  padding: 10px 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 27px;
  color: white;
  margin: 0;
  display: inline;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  min-width: 180px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const TitleWrapper = styled.div`
  height: 0px;
  transform: translateY(-60px);
`;

export const Wrapper = styled.div`
  margin: 60px auto;
  width: 80%;
  padding: 40px;
  border-radius: 7px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  min-width: 300px;
  max-width: 1000px;
  background-color: white;
  color: "black";
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 40px 10px 10px 10px;
    width: 95%;
  }
`;

export const Center = styled.div`
  text-align: center;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledSpan = styled.span`
  font-weight: ${(props) => props.weight === "bold" && "bold"};
  text-align: ${(props) => props.center && "center"};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledDivForList = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.repeatFormula
      ? props.repeatFormula
      : "0.5fr 2fr 1fr 1fr 1.5fr 0.5fr"};
  padding: 10px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundTable};
  transition: 150ms;
  border-radius: 2px;
  margin: 2px;
  column-gap: 5px;
  color: ${({ theme }) => theme.colors.font};

  @media (max-width: 768px) {
    grid-template-columns: ${(props) =>
      props.repeatFormula ? props.repeatFormula : "2fr 1fr 1fr 1.5fr 0.5fr"};
  }
`;

export const TableHeader = styled(StyledDivForList)`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
`;
export const ErrorDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  width: 50%;
  max-width: 300px;
  background-color: rgba(255, 0, 0, 0.493);
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

export const StyledCurrencyButton = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 150ms;
  position: absolute;
  top: 20px;

  color: white;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  border: solid ${({ theme }) => theme.colors.main} 3px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  ${(props) =>
    props.left
      ? css`
          left: 20px;
          @media (max-width: 768px) {
            left: 10px;
          }
        `
      : css`
          right: 20px;
          @media (max-width: 768px) {
            right: 10px;
          }
        `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
  }

  @media (max-width: 768px) {
    top: 10px;
    height: 40px;
    width: 40px;
    font-size: 17px;
  }
`;

export const ListWrapper = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;
`;

export const ReceivedButton = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 150ms;
  color: white;
  background-color: ${({ theme }) => theme.colors.main};
  outline: none;
  border: solid ${({ theme }) => theme.colors.main} 3px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
  }

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    font-size: 15px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : "white")};
  text-decoration: ${(props) => (props.textDecoration ? "underline" : "none")};
`;

export const GridDiv = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: ${(props) =>
    props.repeatFormula ? props.repeatFormula : "1fr 1fr"};

  @media (max-width: 880px) {
    grid-template-columns: ${(props) =>
      props.repeatFormula ? props.repeatFormula : "1fr"};
  }
`;

export const StyledToolBar = styled(ToolBar)`
  background-color: ${({ theme }) => theme.colors.main};
`;

export const DrawerItem = styled.div`
  padding: 25px;
  color: white;
  width: 100%;
  height: 1.5em;
  transition: 100ms;

  &:hover {
    color: #3f51b5;
    background-color: white;
    cursor: pointer;
  }
`;

export const StyledDrawer = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  height: 100%;
  width: 220px;
  overflow: hidden;
`;

export const DivError = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 30vh;
    `}
  color: ${({ theme }) => theme.colors.font};
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
