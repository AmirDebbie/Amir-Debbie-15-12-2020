import styled from "styled-components";

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

export const TableFooter = styled(StyledDivForList)`
  background-color: ${({ theme }) => theme.colors.tableFooter};

  @media (max-width: 768px) {
    grid-template-columns: 3fr 3fr;
  }
`;

export const ListWrapper = styled.div`
  width: 50%;
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto;
`;
