/*
Find unique arraay element
*/

function findUniqueElement(arr) {
    const counts = {};
    
    // Count the occurrences of each element in the array

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        counts[num] = (counts[num]||0)+1
    }
    
    // Find the element with only one occurrence
   for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (counts[num] ===1) {
        return num
    }
   }
    
    // Return null if no unique element is found
    return null;
  }

  

const arr = [1, 2, 4, 5, 1, 2, 4, 2, 4, 1, 2, 4, 3];
const uniqueElement = findUniqueElement(arr);
console.log(uniqueElement);