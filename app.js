// import functions and grab DOM elements
import './utils.js';
import { renderIngredient } from './utils.js';

const form = document.getElementById('form');
const listI = document.getElementById('list-i');
// const nameInput = document.getElementById('name');
// const nameButton = document.getElementById('name-button');

// let state
let ingredients = [];
// let recipes = [];

function renderIngredients() {
    for (let item of ingredients) {
        listI.append(renderIngredient(item.name)); 
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




  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
