/* learn about arrays and its method and will do excercise */

// #### How to create an empty array
// 1- Using Array constructor
// const arr = Array()
// 2- Using Square Bracket
// const arr1 = []


// #### Creating an array using split
// let js = "JavaScript"
// let splittedString = js.split("")
// console.log(splittedString)

// let companies = "Facebook, Google, Apple, IBM"
// let companiesArray = companies.split(", ") 
// console.table(companiesArray)
// console.log("Length of Array item at index [3] is ", companiesArray[3].length)

// Array element at Last index can be calculated as follows

// let lastIndex = companiesArray.length - 1
// lastCompany = companiesArray[lastIndex]
// console.log("Last Comapnay is: ",lastCompany) // IBM

// let companies = ["Facebook", "Google", "Apple", "IBM", "Microsoft"]
// console.log("Lenght: ",companies.length )
// replacing 1st arrray element by OpenAi
// companies[0] = "OpenAi"

// replacing Middle arrray element by Tesla
// let middleArrayLen = Math.round(companies.length/2-1)
// companies[middleArrayLen] = "Tesla"


// replacing Last arrray element by Amazon
// let LastArrayLen = companies.length-1
// companies[LastArrayLen] = "Amazon"

// console.log(companies)


// #### Methods to manipulate array

// Some of the available methods :Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// ##### Creating static values with fill
// let arr = Array(8).fill("X")
// console.log(arr)


// ##### Concatenating array using concat

// concat:To concatenate two arrays.

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]


let fruits = ["Banana", "Orange", "Mango", "Lemon", "Cheery"]
// ##### Getting index of an element in an array

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
console.log("Index of Orange: ", fruits.indexOf("Orange")) //returned index

console.log("Index of Apple (as it is not in array): ", fruits.indexOf("Apple")) //returned -1 as it is not in array

// **  Example  **
// Check an element if it exist in an array.

// let matchIndex = fruits.indexOf("Lemon")
// matchIndex != -1 ? console.log("This fruit exist in array....") : console.log("This fruit does not exist in array....")


// ##### Checking array

// Array.isArray:To check if the data type is an array
// if yes it reurn true else false
// console.log(Array.isArray(fruits))

// ##### Converting array to string

// toString:Converts array to string
// let numArr = [1,2,3,4,5,6]
// let convertedArry = numArr.toString()
// console.table(numArr)
// console.log(convertedArry)
// console.log(typeof convertedArry)
// console.log(typeof numArr)

// // #### Slice method in Array (it returns copied array and doesnot change the original array)
// let n = [2,4, 6, 8, 10, 12, 14, 16]
// let txt = "MongoDB DataBase"
// let n1  = n.slice(1,5)
// console.log("This is Original Array: " ,n)
// console.log("Copied Array: ", n1)
// console.log(n)

// console.log("txt is: ", typeof txt)
// let arrayFrom = Array.from(txt)
// console.table(arrayFrom)
// console.log("txt is: ",  typeof arrayFrom)
// console.table(n1)


// ### Splice Method in Array (it remove specific the part of array and have effect on original array and return leftover array)
// let n = [2,4,6,8,10,12,14,16,18]
// console.log("This is Original Array: " ,n)
// let n1 = n.splice(5)
// console.log("removed Array: ", n1)
// console.log(n)


// ### filerting category 
let categories = [
    "laptop",
    "Earpod",
    "Keyboard",
    "Mouse",
    "Earpod",
    "laptop",
    "Mouse",
    "Printer",
    "Mouse",
    "laptop",
    "Keyboard",
    "Printer",
    "Printer",
    "Keyboard",
    "Printer",
]
let arr = []
// let filteredCat = categories.filter((val)=> {
//     if (arr.includes(val)) {
//         return
//     }
//     else{
//         arr.unshift(val)
//     }
// })


let filteredCat = categories.filter((val)=> 
    // arr.includes(val) ? null : arr.unshift(val)
    !arr.includes(val) ? arr.unshift(val) : ''

)

// let sortArr = arr.sort()
console.log("Categories: ", categories)
// console.log("Filtered Array: ", sortArr)
console.log("Filtered Array: ", arr.sort())
console.log("Filtered Array length: ", arr.length)