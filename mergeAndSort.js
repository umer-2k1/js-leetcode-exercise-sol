/*
Problem: Merge and Sort Two Strings of Numbers

Description:
You are given two strings A and B.
- Each string contains integers separated by commas (and may include spaces).
- Convert each string into an array of numbers.
- Merge both arrays into one.
- Sort the merged array in ascending order.
- Convert the sorted array back into a comma-separated string.

-----------------------------------------------------------
Example 1:
Input:
A = "4, 5, 9, 10"
B = "3, 9, 0"

Output:
0, 3, 4, 5, 9, 9, 10

-----------------------------------------------------------
Example 2:
Input:
A = "8, 2"
B = "1, 7, 3"

Output:
1, 2, 3, 7, 8
-----------------------------------------------------------
*/


function mergeAndSort(a, b) {
    let arrA = a.split(" ").map(x => Number(x.trim()));
    let arrB = b.split(" ").map(x => Number(x.trim()));
    let mergedArray = arrA.concat(arrB);

    for(let i = 0; i<mergedArray.length; i++){
        for (let j=0; j<mergedArray.length-i-1; j++){
            if (mergedArray[j] > mergedArray[j+1]){
                let temp = mergedArray[j];
                mergedArray[j] = mergedArray[j+1];
                mergedArray[j+1] = temp;
                
            }
        }
    }
    return mergedArray.join(" ");
}

let a = "4 5 9 10";
let b = "3 8 0";

console.log(mergeAndSort(a, b));