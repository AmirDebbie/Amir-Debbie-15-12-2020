import styled, { css } from "styled-components";

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
