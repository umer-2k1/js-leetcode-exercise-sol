let arr = [2, 4, 1, 6, 3, 5, 0];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

let arr1 = [2, 4, 1, 6, 8, 3, 8, 5];
let a = arr1.length;
let b = arr1.length + 1;
let newArr = [];

for (let i = 0; i < arr1.length / 2; i++) {
  newArr.push(arr1[i] + arr1[arr1.length - 1 - i]);
 
}
console.log("newArr", newArr);
