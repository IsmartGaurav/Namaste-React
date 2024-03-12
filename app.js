/*
    <div id="root">
        <div id="parent">
            <div id="child">
                <h1>Hey, I'm h1 Tag</h1>
                <h2>Hey, I'm h2 Tag</h2>
            </div> 
        <div id="parent">
            <div id="child">
                <h1>Hey, I'm h1 Tag</h1>
                <h2>Hey, I'm h2 Tag</h2>
            </div> 

        </div>
    </div>
*/

const root = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"Hey, I'm h1 tag"),
React.createElement("h2",{},"Hey I'm h2 tag")],
React.createElement("div",{id:"parent2"},
React.createElement("div",{},[
React.createElement("h1",{},"Hey, I'm h1 tag"),
React.createElement("h2",{},"Hey I'm h2 tag")]
))))

const parent = ReactDOM.createRoot(document.getElementById("root"))
parent.render(root);