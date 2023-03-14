import React from "react";

const Welcome = ({ name = 'Domenico' }) => {

    return (
        <p>Welcome, {name}</p>
    )
}

export default Welcome;
