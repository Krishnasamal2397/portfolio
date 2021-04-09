import React from "react";
import Error from "./Error";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: { message: "", stack: "" },
      info: { componentStack: "" },
    };
  }

  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, info) => {
    this.setState({ error, info });
  };

  render() {
    const { hasError, error, info } = this.state;
    //   console.log(error, info);
    const { children } = this.props;

    return hasError ? <Error  /> : children;
  }
}
