// Problem: Sum all numeric values in a nested array while ignoring strings.
// Use recursion and forEach to handle nested levels.

const arr = [2, 3, ["1", "5", [1, "2", "6"]]];

function sumNumbers(input) {
  let total = 0;
  input.forEach((item) => {
    if (Array.isArray(item)) {
      total += sumNumbers(item);
    } else if (typeof item === "number") {
      total += item;
    }
  });

  return total;
}
console.log(sumNumbers(arr));
