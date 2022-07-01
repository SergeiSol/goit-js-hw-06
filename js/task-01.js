const actions = document.querySelectorAll(`.item`)
console.log('Number of categories:', actions.length)
console.log("")

for (let elem of actions) {
    const category = elem.firstElementChild.textContent;
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \n Elements: ${quantityElem}`);
    console.log("")
}
