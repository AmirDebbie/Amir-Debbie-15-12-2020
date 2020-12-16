import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";

export const ActionButton = () => (
  <IconButton style={{ cursor: "default" }}>
    <DoneIcon style={{ color: "green" }} />
  </IconButton>
);
