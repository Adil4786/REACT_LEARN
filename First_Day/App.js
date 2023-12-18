/*
    <div id="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
        <div id="child2">
            <h1></h1>
            <h2></h2>   
        </div>  
    </div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [   
                React.createElement("h1",{},"Hello from H1 tag"),
                React.createElement("h2",{},"Hello from H2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id:"child2"},
            [   
                React.createElement("h1",{},"Hello from H1 tag"),
                React.createElement("h2",{},"Hello from H2 tag")
            ]
        )
    ]

)
console.log(parent)
// const heading  = React.createElement("h1",{"id":"heading"},"Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)