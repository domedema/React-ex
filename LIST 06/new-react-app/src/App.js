import React from 'react';
import InteractiveWelcome from './InteractiveWelcome';
import Welcome from './Welcome';
import Login from './Login'
import { TodoList } from './TodoList';


const todos = [
  {id:1, title:"Buy Milk", completed:false},
  {id:2, title:"Go to the movies", completed:false},
  {id:3, title:"Water the plants", completed:true},
  {id:4, title:"Clean the bathroom", completed:true},
]

export default class App extends React.Component {
  render() {
    return (
   <div>
   <InteractiveWelcome/>
   <Login/>
   <TodoList todos={todos} />
    </div>)
  }
}
