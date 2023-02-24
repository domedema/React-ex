import React from "react";

export default class Login extends React.Component {

constructor(props){
  super(props)
  this.usernameRef = React.createRef()
}
  state = { username: "", password: "", remember: false, }
  HandleChange = (event) => {
    const name = event.target.name
    const type = event.target.type
    const value = event.target.value
    const checked = event.target.checked
    this.setState({ [name]: type === "checkbox" ? checked : value })
  }
  handleFormSubmit = (event) => {
    event.prventDefault()
    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    const remember = event.target.elements.password.checked


console.log(
  username,
  password,
  remember,
)

  }

componentDidMount = ()=>{
  this.usernameRef.current?.focus()
}
  render() {
    return (
      <div >
        <form onSubmit={this.handleFormSubmit}>
          <input name="username" type='text' onChange={this.HandleChange} ref={this.usernameRef}></input>
          <input name="password" type='password' onChange={this.HandleChange}></input>
          <input name="remember" type='checkbox' onChange={this.HandleChange}></input>
          <button type="submit">Login</button>
          <button name="reset" type="reset" >Reset</button>
        </form>
      </div>
    )
  }
}
