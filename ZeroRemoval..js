// Q1: Remove Zero from an array Element

const arr = [101,102,103,104,105,106, 120, 2420]
console.log(arr)
// console.log(typeof(arr))

let zeroRemoval = arr.map((ele)=>{
    return parseInt(String(ele).replace("0", ""))
})
console.log(zeroRemoval)
// console.log(typeof(zeroRemoval))
