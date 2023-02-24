const product = [
    {id: 1, category: "Mouse"},
    {id: 2, category: "Keyboard"},
    {id: 3, category: "EarPod"},
    {id: 4, category: "Keyboard"},
    {id: 5, category: "PC"},
    {id: 6, category: "Mouse"},
    {id: 7, category: "AppleWatch"},
    {id: 8, category: "PC"},
    {id: 9, category: "AppleWatch"},
] 

let arr= []

let filteredData = product.filter((element)=>
!arr.includes(element.category) ? arr.unshift(element.category) : ''

)
let a = arr.sort()
console.table(a)
// let filteredData = product.map((element)=> element.category)
// console.log(filteredData)
// let filteredData1 = filteredData.filter((val)=> 
// !arr.includes(val) ? arr.unshift(val) : ''
// )

// // let a = arr.sort((a,b)=> a-b)

// // console.log(a)
// console.log(filteredData1)
