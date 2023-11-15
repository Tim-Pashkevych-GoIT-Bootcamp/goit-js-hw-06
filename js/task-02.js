const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector('ul#ingredients');

for (let ingredient of ingredients) {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  ingridientsList.append(ingredientItem);
}
