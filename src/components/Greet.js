import React from "react";

// function Greet() {
//     return <h1>Hello Sean</h1>
// }

const Greet = (props) => {
    const {name, otherName} = props
    console.log(props)
    return (
        <div>
            <h1>
                Good morning {name} a.k.a {otherName}
            </h1>
            {props.children}
        </div>

    )
}

export default Greet