
import calculateFactorial from './factorial.js';
import calculateFibonacci from './fibonacci.js';

const numForFactorial = 5;
console.log(`Faktorial dari ${numForFactorial} adalah ${calculateFactorial(numForFactorial)}`);
/**
 * Output yang diharapkan:
 * Faktorial dari 5 adalah 120
 */

const numForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numForFibonacci} adalah:`);

let fibonacciSequence = [];
for (let i = 0; i <= numForFibonacci; i++) {
  fibonacciSequence.push(calculateFibonacci(i));
  console.log(`[ ${fibonacciSequence.join(', ')} ]`);
}

/**
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen 10 adalah:
 * [ 0 ]
 * [ 0, 1 ]
 * [ 0, 1, 1 ]
 * [ 0, 1, 1, 2 ]
 * [ 0, 1, 1, 2, 3 ]
 * [ 0, 1, 1, 2, 3, 5 ]
 * [ 0, 1, 1, 2, 3, 5, 8 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
 * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */
