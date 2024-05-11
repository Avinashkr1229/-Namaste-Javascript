/* 
<div id="parent">
    <div id="child1">
        <h1>Am h1 tag</h1>
        <h2>Am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Am h1 tag</h1>
        <h2>Am h2 tag</h2>
    </div>
</div>

Create this this in react

Notes:
wheneevr we create createelemnt which will create object of react elemnt when render using reactdom which will conver this
reactElemnt to HTML code

The above html template seems more easy to write while we created the same structure react which
looks more tedious thats why jsx exist in react which will make react development more easy
*/

const parent = React.createElement('div', { id: 'parent' },
    [React.createElement('div', { id: 'child1' },
        [React.createElement('h1', {}, 'Am h1 tag'), React.createElement('h2', {}, 'Am h2 tag')]), 
    React.createElement('div', { id: 'child2' },
            [React.createElement('h1', {}, 'Am h1 tag'), React.createElement('h2', {}, 'Am h2 tag')])])

// const heading = React.createElement("h1", { id: 'header' }, "Header tag created");
// const div = React.createElement("div", { id: 'main' }, heading);

// console.log(div);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);