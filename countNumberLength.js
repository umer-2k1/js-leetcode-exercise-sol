// Problem: Count number of digits in a number without converting it to a string.

let num = 34123;
let count = 0;

if (num === 0) count = 1;

while (num > 0) {
  num = Math.floor(num / 10);
  count++;
}
console.log("Count:", count);
