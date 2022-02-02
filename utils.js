export function renderIngredient(o) {
    const li = document.createElement('li');
    li.textContent = `${o.name} - Qty: ${o.qty}`;
    return li;

}

export function renderMeal(o) {
    const p = document.createElement('p');
    p.textContent = `${o.name} - ${o.count} ingredients.`;
    return p;
}