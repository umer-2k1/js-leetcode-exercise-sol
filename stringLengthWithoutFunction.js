/*
Calculate the length of string without using length built in function
*/

let counter = 0
const calculatingStringLength = (str)=>{

    for (let i = 0; str[i]!=undefined; i++) {
        counter++
        
    }
    return counter
}
let str = "Hello!Developer"
console.log(calculatingStringLength(str))
