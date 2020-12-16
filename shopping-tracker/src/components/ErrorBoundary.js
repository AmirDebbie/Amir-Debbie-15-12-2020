import React from "react";
import { DivError } from "../styles";

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
        <DivError>
          <h1>Oops! An Error Occurred!</h1>
        </DivError>
      );
    }

    return this.props.children;
  }
}
