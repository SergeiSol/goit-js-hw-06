const actions = document.querySelectorAll(`.item`)
console.log('Number of categories:', actions.length)
console.log("")

for (let elem of actions) {
    const category = elem.firstElementChild.textContent;
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \n Elements: ${quantityElem}`);
    console.log("")
}



// const category = document.parentElement
// console.log(`Category:`, actions[0].firstElementChild.textContent)
// console.log(`Elements:`, actions[0].lastElementChild.children.length)

// // const products = document.parentElement
// console.log(`Category: Products`, actions)
// console.log(`Elements: 3`)

// // const technologies = document.parentElement
// console.log(`Category: Technologies`, actions)
// console.log(`Elements: 5`)