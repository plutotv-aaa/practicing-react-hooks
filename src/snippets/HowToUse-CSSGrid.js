export const BasicConceptHTMLSnippet = `
<div className="main">
    <header>
        <h1>Not a grid item</h1>
    </header>
    <body>
        <article>
            Not a grid item
        </article>
    </body>
</div>
`;
export const BasicConceptCSSSnippet = `
.main {
    display: grid;
}
`;
export const CssGrid3By3CSSSnippet = `
/* Each item in the grid contains numbers */
.item {
    /* Center the contents of the grid items.*/
    /* Making each grid item a Flex Container */
    display: flex;

    /* Horizontal and Vertical centering */
    justify-content: center;
    align-items: center;
    border: 5px solid #87b5ff;
    border-radius: 3px;
    font-size: 2em;
    font-family: sans-serif;
    font-weight: bold;
    background-color: #1c57b5
}

.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 60px 60px 60px;
    grid-gap: 20px;
    grid-auto-rows: 60px;
}
`;
export const CssGrid3By3HTMLSnippet = `
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
</div>
`;
