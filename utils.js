export function renderIngredient(i) {
    const li = document.createElement('li');
    li.textContent = i;
    return li;

}

export function renderMeal(name, count) {
    const p = document.createElement('p');
    p.textContent = `${name} - ${count} ingredients.`;
    return p;
}