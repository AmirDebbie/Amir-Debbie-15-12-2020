import styled from "styled-components";

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
`;

export const StyledDiv = styled.div`
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

export const TableHeader = styled(StyledDiv)`
  background-color: #3f51b5;
  color: white;
`;
