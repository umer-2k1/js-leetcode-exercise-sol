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
      console.log(i);
    }
  }
};

printPrimeNumbers(1, 20);
