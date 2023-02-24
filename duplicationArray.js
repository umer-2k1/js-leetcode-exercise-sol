// ways to remove duplicates element in an Array and arrange them in ascending and escending order in Javascript

// ********* Using Filter method *********
arr = [2,3,21,3,14,11,44,4,1,2,1,4,22,3]
let noDuplication = arr.filter((ele,index)=> arr.indexOf(ele)== index
)
console.log(noDuplication)


// ********* Using ForEach loop *********
// array1 = [];
// arr.forEach((elem)=>{
//     if (!array1.includes(elem)) {
//         array1.push(elem)
//     }
//     return array1
// })
// console.log(array1.sort((a,b)=> a-b))

// let a1 = [[3], 4, [2], [5], 1, 6]
// let ans = a1.map((ele)=>  {
//     ele.sort((a,b)=> a+b)
// })
// let ans = a1.sort((a,b)=> a-b)
// console.log(ans)