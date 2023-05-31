/*
Write a recursive function f1(a, b) that calculates the sum of numbers from a to b, inclusive. The function follows the following rules:

If b is equal to 0, return a.
If a is equal to 0, return b.
Otherwise, recursively call the function with the arguments (a, b - 1) and add b to the result.
*/


function f1(a, b) {
    if (b == 0) {
      return a;
    } else if (a == 0) {
      return b;
    } else {
      return f1(a, b - 1) + b;
    }
  }
  
  const result = f1(6, 3);
  console.log(result); // Output: 24
  