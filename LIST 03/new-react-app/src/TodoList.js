import React from "react";

export class TodoList extends React.Component {
    state = { task: '', list: [] }
    constructor(props){
    super(props)


}
render() {
    return (
        <div>
            <ul>
                {this.state.list.map((el) => (
                    <li>{el}</li>
                ))}
            </ul>
            <input type="text" value={this.state.task} onChange={e=>this.setState({task:e.target.value})} />
            <button onClick={()=>{this.state.list.push(this.state.task);this.setState({task:""})}}>Add Item</button>
        </div>
    )
}
}