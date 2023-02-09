
import React from 'react';

class Counter extends React.Component {
  state = {
    count: this.props.initialValue || 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + (this.props.incrementAmount || 1) }));
    }, this.props.interval || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}