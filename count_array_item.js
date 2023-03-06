// count the numbe of each fruit in an array

// consider an Array

const fruits = [
    {apple: 4, orange: 3, grapes: 6},
    {pomegranate: 2, banana: 5, kewi: 7},
    {orange: 9, apple: 4, kewi: 7},
]

const countedFruits = []

fruits.forEach((element)=>{
    for (i in element){
        console.log(i)
    
        if (countedFruits[i]) {
            countedFruits[i] =  countedFruits[i]+element[i]
        }
        else{
            countedFruits[i] = element[[i]]
        }
    }
})
console.log(countedFruits)