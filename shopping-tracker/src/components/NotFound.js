import React from "react";
import { DivError } from "../styles";

function NotFound() {
  return (
    <DivError marginTop>
      <h1>404 Not Found :(</h1>
      <p>
        The requested resource could not be found but may be available again in
        the future.
      </p>
    </DivError>
  );
}

export default NotFound;
