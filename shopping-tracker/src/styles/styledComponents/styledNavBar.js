import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToolBar } from "@material-ui/core";

export const StyledLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : "white")};
  text-decoration: ${(props) => (props.textDecoration ? "underline" : "none")};
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
