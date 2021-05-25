import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './ErrorBoundary.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className={styles.errorWrapper}>
          <h1 className={styles.errorTitle}>Error</h1>
          <p className={styles.errorText}>Please try to reload this page</p>
        </div>
      );
    }

    const { children } = this.props;

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.element.isRequired,
};
