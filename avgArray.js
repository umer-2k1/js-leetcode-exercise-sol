// Problem statement
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    } else {
      const sum = arr.reduce((total, num) => total + num);
      return sum / arr.length;
    }
  }
  const arr  =  [1,2,3,4,5,6,7,8]
//   arr  =  [0]
  console.log("Avg of Array: ",calculateAverage(arr))