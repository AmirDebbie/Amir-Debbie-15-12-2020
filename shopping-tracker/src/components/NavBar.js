import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  IconButton,
  Typography,
  Drawer,
  Switch,
  Tooltip,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { setTheme } from "../redux/actions";
import {
  StyledLink,
  StyledToolBar,
  StyledDrawer,
  DrawerItem,
  drawerIconProps,
} from "../styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function NavAppBar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { innerWidth, theme } = useSelector((state) => state);

  const handleDrawer = () => {
    setOpen(true);
  };

  return (
    <div>
      <AppBar position="static">
        <StyledToolBar>
          <IconButton
            onClick={handleDrawer}
            color="inherit"
            edge="start"
            aria-label="menu"
            id="openMenu"
          >
            <Menu />
          </IconButton>
          <StyledLink to="/list">
            <Typography
              style={{ marginLeft: innerWidth > 470 ? 30 : 0 }}
              variant={innerWidth > 470 ? "h4" : innerWidth > 350 ? "h5" : "h6"}
            >
              {innerWidth > 470 && <ShoppingCartIcon />}
              &nbsp; Shopping Tracker
            </Typography>
          </StyledLink>
          <Typography style={{ position: "absolute", right: 10, top: 15 }}>
            <Tooltip title="Change Theme">
              <Switch
                checked={theme === "dark"}
                onChange={() =>
                  dispatch(setTheme(theme === "dark" ? "light" : "dark"))
                }
                name="checkedA"
              />
            </Tooltip>
          </Typography>
        </StyledToolBar>
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
            <DrawerItem id="boughtItems" onClick={() => setOpen(false)}>
              Bought Items
              <ShoppingCartIcon style={drawerIconProps} />
            </DrawerItem>
          </StyledLink>
          <StyledLink to="/received">
            <DrawerItem id="receivedItems" onClick={() => setOpen(false)}>
              Received Items
              <ShoppingCartIcon style={drawerIconProps} />
            </DrawerItem>
          </StyledLink>
        </StyledDrawer>
      </Drawer>
    </div>
  );
}

export default NavAppBar;
