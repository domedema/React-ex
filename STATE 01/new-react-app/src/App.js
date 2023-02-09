
import React from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

