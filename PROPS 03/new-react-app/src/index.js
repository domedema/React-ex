
import React from 'react';

class Welcome extends React.Component {
  static defaultProps = {
    name: 'Guest',
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Welcome name="John" age={30} />;
  }
}
