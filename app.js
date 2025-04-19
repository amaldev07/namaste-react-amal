/* 
<div id="parent">
    <div id="parent">
        <h1 id="h1-tag" class="font-red">Hello World From React</h1>
    </div>
</div>
*/

const header = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")]
    ))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);