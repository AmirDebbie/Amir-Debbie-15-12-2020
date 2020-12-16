import styled, { css } from "styled-components";

export const APIErrorDiv = styled.div`
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

export const ErrorDiv = styled.div`
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
