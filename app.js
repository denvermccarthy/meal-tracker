// import functions and grab DOM elements
import './utils.js';
import { renderIngredient, renderMeal } from './utils.js';

const form = document.getElementById('form');
const listI = document.getElementById('list-i');
const listM = document.getElementById('list-m');
const nameInput = document.getElementById('name');
const save = document.getElementById('save');
const remove = document.getElementById('remove');

// console.log('i', nameInput, 'b', nameButton);
// let state
let ingredients = [];
let meals = [];

function renderIngredients() {
    for (let item of ingredients) {
        const li = renderIngredient(item); 
        listI.append(li);
    }
}


function renderMeals() {
    listM.textContent = '';
    for (let meal of meals){
        const p = renderMeal(meal);
        listM.append(p);
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const ingredientData = {
        name: formData.get('ingredient'),
        qty: formData.get('quantity')
    };
    ingredients.push(ingredientData);
    listI.textContent = '';
    form.reset();
    // console.log('i', ingredients);
    renderIngredients();
});

remove.addEventListener('click', () => {
    ingredients.pop();
    listI.textContent = '';
    renderIngredients();
});

save.addEventListener('click', () => {
    
    const input = nameInput.value;
    const iCount = ingredients.length;
    const meal = {
        name: input,
        count: iCount
    };
    meals.push(meal);
    
    // console.log('meal', meal, 'meals', meals, 'i', ingredients);
    
    nameInput.value = '';
    ingredients = [];
    listI.textContent = '';

    
    renderMeals(meals);
});






  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
