function getElementWidth(content, padding, border) {
    content = Number.parseInt(content)
    padding = Number.parseInt(padding)
    border = Number.parseFloat(border)
    const width = content + 2 * padding + 2 * border;
    return width
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
