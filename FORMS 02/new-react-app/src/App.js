import React from 'react';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import Login from './Login'


export default class App extends React.Component {
  render() {
    return (
   <div>
   <InteractiveWelcome/>
   <Login/>
    </div>)
  }
}
