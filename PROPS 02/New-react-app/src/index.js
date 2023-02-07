
import React from 'react';

class Welcome extends React.Component {
  static defaultProps = {
    name: 'Guest',
  };

  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}

class App extends React.Component {
  render() {
    return <Welcome />;
  }
}