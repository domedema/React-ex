import React from "react";


export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-white border border-red-500 p-4">
                <Container title="Container Title">

                    <h1>Hello World!</h1>
                    <p>This is some text inside a container.</p>
                </Container>
            </div>
        )
    }
}
