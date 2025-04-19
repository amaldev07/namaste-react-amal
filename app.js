/* 
<div id="parent">
    <div id="parent">
        <h1 id="h1-tag" class="font-red">Hello World From React</h1>
    </div>
</div>
*/

const header = React.createElement("h1",
    { id: "h1-tag", class: "font-red" },
    "Hello World From React")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);