let arr = [11, 3, 2, 3, 2, 3, 4, 11, 4];

let frequency = {};
arr.forEach((val) => {
  if (frequency[val]) {
    console.log("first", frequency[val]);
    frequency[val]++;
  } else {
    frequency[val] = 1;
    console.log("check: ", (frequency[val] = 1));
  }
});
console.log(frequency);

let arr1 = [2, 4, 6, 2, 1, 5, 6, 2, 4];
let visited = [];
for (let i = 0; i < arr1.length; i++) {
  if (visited[i] === 1) continue;

  let count = 0;
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      visited[j] = 1;
      count++;
    }
  }
  console.log(`${arr1[i]} : `, count);
}
