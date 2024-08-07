//? Swap two numbers without  using third variable

let a = 3;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log("Swapped value of A: ", a);
console.log("Swapped value of B: ", b);

//? Print prime numbers by giving interval
const printPrimeNumbers = (lowest, highest) => {
  for (let i = lowest; i < highest; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      // console.log(i);
    }
  }
};

printPrimeNumbers(1, 20);

// isPrime Function: Checks if a number is prime.

// Numbers less than or equal to 1 are not prime.
// Numbers 2 and 3 are prime.
// Eliminates numbers divisible by 2 or 3.
// Checks divisibility from 5 up to the square root of the number, using a step of 6 to skip even numbers and multiples of 3.

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 0; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    return true;
  }
}
isPrime(24);

// function printPrimesInRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// printPrimesInRange(1, 40);

const data = [
  { language: "JavaScript" },
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "C++" },
];

// function convertToCountFormat(data) {
//   return data.reduce((acc, curr) => {
//     const existing = acc.find((item) => item.language === curr.language);
//     if (existing) {
//       existing.count += 1;
//     } else {
//       acc.push({ language: curr.language, count: 1 });
//     }
//   }, []);
// }
const convertToCountFormat = (arr) => {
  return arr.reduce((acc, curr) => {
    const existing = acc.find((item) => item.language === curr.language);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ language: curr.language, count: 1 });
    }
    return acc;
  }, []);
};

const result = convertToCountFormat(data);
console.log(result);
