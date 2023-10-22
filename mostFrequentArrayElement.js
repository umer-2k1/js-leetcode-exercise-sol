// Find most frequent array element

function findMostFrequentElement(arr){
    const counts = {} //object to store counts of each array element


    // count the occurance of each element
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        counts[element] = (counts[element]||0) +1
    }

    let mostFrequentElement
    let frequency = 0

    // check the highest frequenet element
    for(const key in counts){
        if (counts[key] > frequency) {
            frequency = counts[key]
            mostFrequentElement = key
        }

    }
    return mostFrequentElement //returing most frequent element
}

const arr = [1, 2, 4, 5, 4, 3, 2, 1, 4];
console.log(findMostFrequentElement(arr));