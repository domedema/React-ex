
import React from 'react';

class Welcome extends React.Component {
  static defaultProps = {
    name: 'Guest',
  };

  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
        <p>
          {this.props.age > 18 ? `Your age is ${this.props.age}` : `You are very young!`}
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Welcome name="John" age={30} />;
  }
}
