// import functions and grab DOM elements
import './utils.js';
import { renderIngredient, renderMeal } from './utils.js';

const form = document.getElementById('form');
const listI = document.getElementById('list-i');
const listM = document.getElementById('list-m');
const nameInput = document.getElementById('name');
const nameButton = document.getElementById('name-button');

// console.log('i', nameInput, 'b', nameButton);
// let state
let ingredients = [];
let meals = [];

function renderIngredients() {
    for (let item of ingredients) {
        const li = (renderIngredient(item.name)); 
        listI.append(li);
    }
}

function renderMeals() {
    for (let meal of meals){
        const p = renderMeal(meal.name, meal.count);
        listM.append(p);
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const ingredientData = {
        name: formData.get('ingredient'),
    };
    ingredients.push(ingredientData);
    // console.log('i', ingredientsList);
    listI.textContent = '';
    form.reset();
    renderIngredients();
});

nameButton.addEventListener('click', () => {
    const input = nameInput.value;
    const iCount = ingredients.length;
    const meal = {
        name: input,
        count: iCount
    };
    meals.push(meal);
    // console.log('meal', meal, 'meals', meals);
    nameInput.value = '';
    renderMeals(meals);
});






  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
