// IMPORT MODULES under test here:
import { renderIngredient } from '../utils.js';

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
