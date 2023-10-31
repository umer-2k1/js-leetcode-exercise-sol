let arr = [11, 3, 2, 3, 2, 3, 4, 11, 4];

let frequency = {};
arr.forEach((val) => {
  if (frequency[val]) {
    console.log("first", frequency[val]);
    frequency[val]++;
  } else {
    frequency[val] = 1;
  }
});

console.log(frequency);
