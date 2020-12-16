import React from "react";
import { ErrorDiv } from "../styles";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.toString() };
  }
  render() {
    if (this.state.hasError) {
      return (
        <ErrorDiv>
          <h1>Oops! An Error Occurred!</h1>
        </ErrorDiv>
      );
    }

    return this.props.children;
  }
}
