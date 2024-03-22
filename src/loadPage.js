const loadPage = () => {
    const img = document.createElement('img');
    const header = document.createElement('h1');
    const text = document.createTextNode('text');

    const div = document.querySelector("#content");
    div.appendChild(img);
    div.appendChild(header);
    div.appendChild(text);
}
export { loadPage };