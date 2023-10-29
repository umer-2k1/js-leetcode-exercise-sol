/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

// Method 1
function flattenAndSort(array) {
    // Flatten the array
    return array
    .flatMap((subArray)=> subArray)
    .sort((a,b)=> a-b)
}

const twoDArray = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8],[]];
const flattenedAndSorted = flattenAndSort(twoDArray);

console.log(flattenedAndSorted.length);


// Method2 without using built In Function
function flattenAndSort1(arr) {
    // Flatten the array
    let flattenArray = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flattenArray.push(arr[i][j])
        }
    }

    // Sort the flattened array in ascending order using bubble sort

    for (let i = 0; i < flattenArray.length-1; i++) {
        for (let j = 0; j < flattenArray.length-i-1; j++) {
           if(flattenArray[j]> flattenArray[j+1]){
            let temp = flattenArray[j]
            flattenArray[j] = flattenArray[j+1]
            flattenArray[j+1] = temp
           }
        }
    }

    return flattenArray
}

const twoDArray1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8],[]];
const flattenedAndSorted1 = flattenAndSort1(twoDArray1);

console.log(flattenedAndSorted1);
