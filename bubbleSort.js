let arr = [2,4,1,6,3,5,0]
for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < (arr.length - i-1); j++) {
    
        if (arr[j]> arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    
    }

}

console.log(arr)
console.log(arr[arr.length-2])