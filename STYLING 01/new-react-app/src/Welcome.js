import React from 'react';


export default class Welcome extends React.Component {
    static defaultProps = {
      name: 'Guest',
    };
  
    render() {
      return (
        <div className='welcome'>
          <p>Welcome, {this.props.name}!</p>
          <p>Your age is {this.props.age}</p>
        </div>
      );
    }
  }

