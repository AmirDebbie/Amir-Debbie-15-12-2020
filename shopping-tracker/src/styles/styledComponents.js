import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const H1 = styled.h1`
  padding: 10px 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 27px;
  color: white;
  margin: 0;
  display: inline;
  background-color: ${(props) => (props.color ? props.color : "#3f51b5")};
  border-radius: 5px;
  min-width: 180px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  z-index: 2;
`;

export const TitleWrapper = styled.div`
  height: 0px;
  transform: translate(0, -60px);
`;

export const Wrapper = styled.div`
  margin: 5% auto;
  width: 80%;
  padding: 40px;
  border-radius: 7px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  min-width: 300px;
  max-width: 1000px;
  background-color: white;
  color: "black";
  position: relative;
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
`;

export const StyledDivForList = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.repeatFormula
      ? props.repeatFormula
      : "0.5fr 2fr 1fr 1fr 1.5fr 0.5fr"};
  padding: 10px;
  align-items: center;
  background-color: rgba(180, 180, 180, 0.12);
  transition: 150ms;
  border-radius: 2px;
  margin: 2px;
`;

export const TableHeader = styled(StyledDivForList)`
  background-color: #3f51b5;
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
  right: 20px;
  color: white;
  background-color: #3f51b5;
  outline: none;
  border: solid #3f51b5 3px;
  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  &:hover {
    background-color: #3f51a5;
    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const ListWrapper = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;
`;
