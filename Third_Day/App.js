import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <div>
        <h1>This is my Title</h1>
    </div>
)

const title2 =  (
    <div>
        <h1>This is my Title 2</h1>
    </div>
)
const Heading = () =>(
    <div>
        <Title />
        {title2}
        <h1>This is a functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading />)
