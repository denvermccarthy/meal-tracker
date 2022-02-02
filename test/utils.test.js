// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('render a li element for an ingredient with quantity', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>apple - Qty: 6</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({
        name: 'apple',
        qty: 6
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('render a meal with the name and number of ingredients', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<p>Pie - 6 ingredients.</p>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({
        name: 'Pie',
        count: 6
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});