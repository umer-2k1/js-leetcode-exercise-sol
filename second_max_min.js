let arr = [32,2,4,42,3,4,32,1,4,5,97,5,61,12,42, 67]
arr.sort((x,y)=> x-y)
let result = []
function secondLargestAndSmallest(arr){
    console.log(arr);
    for(let num of arr){
        if(!result.includes(num)){
            result.push(num)
        }
    }
    
}
secondLargestAndSmallest(arr)
console.log(result)
console.log("Second smallest number in an array ",result[1])
console.log("Second Largest number in an array ",result[result.length-2])