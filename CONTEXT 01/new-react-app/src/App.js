import React from 'react';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import Login from './Login'
import { TodoList } from './TodoList';
import Container from './Container';

const todos = [
  { id: 1, title: "Buy Milk", completed: false },
  { id: 2, title: "Go to the movies", completed: false },
  { id: 3, title: "Water the plants", completed: true },
  { id: 4, title: "Clean the bathroom", completed: true },
]

export default class App extends React.Component {

  state = {
    language: 'en',
  }
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    })
  }



  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value={"en"}>ENGLISH</option>
          <option value={"ita"}>ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}> 
          <InteractiveWelcome />
        <Login />
        <TodoList todos={todos} />
        <Container />
        </LanguageContext.Provider>
        
      </div>)
  }
}
