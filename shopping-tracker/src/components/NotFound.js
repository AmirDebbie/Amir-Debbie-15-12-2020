import React from "react";
import { ErrorDiv } from "../styles";

function NotFound() {
  return (
    <ErrorDiv id="notFound" marginTop>
      <h1>404 Not Found :(</h1>
      <p>
        The requested resource could not be found but may be available again in
        the future.
      </p>
    </ErrorDiv>
  );
}

export default NotFound;
