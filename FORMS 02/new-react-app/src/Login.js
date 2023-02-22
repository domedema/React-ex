import React from "react";

export default class Login extends React.Component {


    state = { username: "", password: "", remember: false }
    HandleChange = (event) => {
        const name = event.target.name
        const type = event.target.type
        const value = event.target.value
        const checked = event.target.checked
        this.setState({ [name]: type === "checkbox" ? checked : value })
    }

    render() {
        return (
        <div>
            <input name="username" type='text' onChange={this.HandleChange}></input>
            <input name="password" type='password' onChange={this.HandleChange}></input>
            <input name="remember" type='checkbox' onChange={this.HandleChange}></input>

        </div>
        )
    }
}
