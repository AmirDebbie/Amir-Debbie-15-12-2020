import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import styled from "styled-components";
import { StyledLink } from "../styles/styledComponents";
import ClassIcon from "@material-ui/icons/Class";
import TimelineIcon from "@material-ui/icons/Timeline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function NavAppBar() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleDrawer}
            color="inherit"
            edge="start"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <StyledLink to="/list">
            <Typography style={{ marginLeft: 30 }} variant="h4">
              <ShoppingCartIcon />
              &nbsp; Shopping Tracker
            </Typography>
          </StyledLink>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <StyledDrawer>
          <StyledLink to="/list">
            <DrawerItem onClick={() => setOpen(false)}>
              Bought Items
              <ShoppingCartIcon style={{ position: "absolute", right: 10 }} />
            </DrawerItem>
          </StyledLink>
          <StyledLink to="/received">
            <DrawerItem onClick={() => setOpen(false)}>
              Received Items
              <ShoppingCartIcon style={{ position: "absolute", right: 10 }} />
            </DrawerItem>
          </StyledLink>
        </StyledDrawer>
      </Drawer>
    </div>
  );
}

const DrawerItem = styled.div`
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

const StyledDrawer = styled.div`
  background-color: #3f51b5;
  height: 100%;
  width: 220px;
  overflow: hidden;
`;

export default NavAppBar;
