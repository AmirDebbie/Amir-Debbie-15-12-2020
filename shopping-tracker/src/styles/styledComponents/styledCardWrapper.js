import styled from "styled-components";

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
