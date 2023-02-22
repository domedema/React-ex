import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
    }
    render() {
        return <div>
            <input onChange={(e) => this.setState({ name: e.target.value })}></input>
            <Welcome name={this.state.name} age={30} />
        </div>

    }
}