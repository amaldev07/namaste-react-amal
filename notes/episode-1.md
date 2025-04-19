How to  convert the below html to react using createElement menthod
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
        React.createElement("h1", { id: "h1-tag", class: "font-red" },
            "I am an h1 tag")
    ))
-------------------------------------------------------------------------------------------------
if there are 2 siblings like 
<div id="parent">
    <div id="parent">
        <h1 id="h1-tag" class="font-red">I am h1 tag</h1>
        <h2 id="h1-tag" class="font-red">I am h2 tag</h2>
    </div>
</div>

use the 3rd element in React.createElement as array
const header = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [ React.createElement("h1", { id: "h1-tag", class: "font-red" }, "I am an h1 tag"),
         React.createElement("h1", { id: "h1-tag", class: "font-red" }, "I am an h1 tag")]
    ))
-------------------------------------------------------------------------------------------------