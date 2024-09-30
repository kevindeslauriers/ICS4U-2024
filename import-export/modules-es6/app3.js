// file: index.js

// Renaming the imported functions using 'as'
import { add as addition, subtract as subtraction, multiply as product } from './mathOperations.js';

console.log(addition(2, 3));     // Outputs: 5
console.log(subtraction(5, 2));  // Outputs: 3
console.log(product(4, 5));      // Outputs: 20
