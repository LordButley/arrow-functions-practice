/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addThreeNumbers(a, b, c){
    return a + b + c;
}
let sum = addThreeNumbers(5, 2, 7);
console.log(sum);
// Arrow Function With Parameters

const addFourNumbers = (a, b, c, d) => {
    return a + b + c + d;
}
console.log(addFourNumbers(1, 4, 5, 7));


// Single Line Arrow Function With Parameters
const multiplyTwoNumbers = (a, b) => a * b;
console.log(multiplyTwoNumbers(3,5));


// Implicit Returns

// Returning Multiple Lines
