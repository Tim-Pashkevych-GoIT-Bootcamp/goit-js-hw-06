const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector('ul#ingredients');

const ingredientsListItems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  return ingredientItem;
});

ingridientsList.append(...ingredientsListItems);
