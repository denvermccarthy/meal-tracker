export function renderIngredient(i) {
    const li = document.createElement('li');
    li.textContent = i;
    return li;

}

export function renderMeal(name, ingredientCount) {
    const div = document.createElement('div');
    div.textContent = `${name} - ${ingredientCount} Ingredients`;
    return div;
}