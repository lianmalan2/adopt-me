import { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    console.log('ErrorBoundary >> getDerivedStateFromError');
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary >> componentDidCatch');
    console.error(error, info);
  }

  componentDidUpdate() {
    console.log('ErrorBoundary >> componentDidUpdate');
    if (this.state.hasError) {
      console.log('ErrorBoundary >> componentDidUpdate >> hasError');
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    console.log('ErrorBoundary >> render');
    if (this.state.redirect) {
      console.log('ErrorBoundary >> render >> redirect');
      return <Navigate to="/"></Navigate>;
    } else if (this.state.hasError) {
      console.log('ErrorBoundary >> render >> hasError');
      return (
        <h2>
          An error has occurred. <Link to="/">Click here</Link> to go home!
        </h2>
      );
    }

    console.log('ErrorBoundary >> has no error');
    return this.props.children;
  }
}

export default ErrorBoundary;
