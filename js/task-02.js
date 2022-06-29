const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients")
// console.log(ingredientsRef)
const ingredientsList = ingredients.map((ingredient) => {
  const liEl = document.createElement(`li`);
  liEl.classList.add(`item`);
  liEl.textContent = ingredient;
  return liEl;
})
// console.log(ingredientsList)
ingredientsRef.append(...ingredientsList) 
