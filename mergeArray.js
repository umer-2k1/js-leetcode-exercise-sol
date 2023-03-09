// Merge two sorted array in Ascending order and remove duplicates
let arr1 = [2,5,2,6,8,1,4,3,5]
let arr2 = [12,5,2,16,8,10,7,3,7]

// The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array

let mergeArray = [...arr1, ...arr2]
mergeArray.sort((a,b)=> a-b)
// console.log(mergeArray)

let removeDuplicatedArray = mergeArray.filter((val, index)=> mergeArray.indexOf(val)==index)
console.log(removeDuplicatedArray)

