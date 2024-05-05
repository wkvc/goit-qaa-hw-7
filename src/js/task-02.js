const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Wybieramy element ul#ingredients z dokumentu
const ingredientsList = document.getElementById('ingredients');

// Iterujemy przez każdy element tablicy ingredients
ingredients.forEach(ingredient => {
    // Tworzymy nowy element li
    const listItem = document.createElement('li');
    // Dodajemy zawartość tekstową do nowego elementu li
    listItem.textContent = ingredient;
    // Dodajemy klasę 'item' do nowego elementu li
    listItem.classList.add('item');
    // Dodajemy nowy element li do listy ul#ingredients
    ingredientsList.appendChild(listItem);
});