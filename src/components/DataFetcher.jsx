
import React, { Component } from 'react';

export default class DataFetcher extends Component {
  componentDidMount() {
    if (typeof this.props.fetch === 'function') {
      this.props.fetch();
    }
  }

  componentWillUnmount() {
    if (typeof this.props.destroy === 'function') {
      this.props.destroy();
    }
  }

  render() {
    return this.props.children;
  }
}