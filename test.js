// Write a JavaScript program to find the maximum number in an array.

//  1- Using Math.max with the Spread Operator
const arrNumbers = [5, 12, 8, 21, 19];
function findMaxNumber(arr) {
  return Math.max(...arr);
}
console.log(findMaxNumber(arrNumbers));

//  2- Using Math.max with the Spread Operator
function findMaxUsingReduce(arr) {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
}
console.log(findMaxNumber(arrNumbers));

//  2- Using loop
function findMaxUsingLoop(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMaxNumber(arrNumbers));

// Write a JavaScript program to find palindrome string

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("level"));

// Write a JavaScript program to find factorial
function factorial(n) {
  // Base case: if n is 0, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

// Examples
console.log(factorial(5));

// Write a JavaScript program to checks if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function listPrimesInRange(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
// Examples
console.log(listPrimesInRange(1, 20));

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
function generateFibonacciSequence(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(fibonacciRecursive(i));
  }
  return sequence;
}
console.log(generateFibonacciSequence(10));

//JavaScript Code to Convert String to Title Case

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
const inputString = "hello world from javascript";
console.log(toTitleCase(inputString));
