// Punkt 1: Policzenie i wyświetlenie liczby kategorii
const categoriesCount = document.querySelectorAll('#categories .item').length;
console.log('Number of categories:', categoriesCount);

// Punkt 2: Znalezienie i wyświetlenie tytułu oraz liczby elementów w każdej kategorii
document.querySelectorAll('#categories .item').forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryTitle}, Elements: ${elementsCount}`);
});
