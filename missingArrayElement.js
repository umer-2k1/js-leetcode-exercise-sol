// Finding missing element in an array and return a new array that contains missing element

let givenArray = [1,3,6,15,20,8,7,4,12]

let missingElementArray =  []
const missingElementFunction = (sortedArray, maxArray, minArray)=>{

    for (let i = minArray; i <= maxArray; i++) {
        if(sortedArray.indexOf(i) != -1){
            continue
        }
        missingElementArray.push(i)       
    }
}

let sortedArray = givenArray.sort((a,b)=> a-b)
let maxArray = Math.max(...sortedArray)
let minArray = Math.min(...sortedArray)


console.log("sortedArray: ",sortedArray)
missingElementFunction(sortedArray, maxArray, minArray)
console.log("missingElementArray: ",missingElementArray)

