// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from '../utils.js';

const test = QUnit.test;

test('render a li element for an ingredient', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li>apple</li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient('apple');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('render a li element for an ingredient', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div>Pie - 6 Ingredients</div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal('Pie', 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});