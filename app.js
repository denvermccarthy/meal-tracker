// import functions and grab DOM elements
import './utils.js';
import { renderIngredient } from './utils.js';

const formI = document.getElementById('form-i');
const formN = document.getElementById('form-n');
const listI = document.getElementById('list-i');

// let state
let ingredientsList = [];
let recipes = [];
// set event listeners 

function renderIngredients() {
    for (let item of ingredientsList) {
        listI.append(renderIngredient(item)); 
    }
}



formI.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formI);

    ingredientsList.push(formData.get('ingredient'));
    // console.log('i', ingredientsList);
    listI.textContent = '';
    formI.reset();
    renderIngredients();
});

formN.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formN);

    const recipe = {
        name: formData.get('name'),
        ingredients: ingredientsList
    };

    recipes.push(recipe);
    formN.reset();
    let ingredientsList = [];
    console.log('r', recipes);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
