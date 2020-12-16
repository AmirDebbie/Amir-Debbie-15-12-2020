import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { IconButton, Tooltip } from "@material-ui/core";

export const ErrorButton = ({ tooltipTitle, id }) => (
  <Tooltip title={tooltipTitle}>
    <IconButton id={id} style={{ cursor: "default" }}>
      <ErrorOutlineIcon
        style={{ width: "30px", height: "30px" }}
        color="error"
      />
    </IconButton>
  </Tooltip>
);
