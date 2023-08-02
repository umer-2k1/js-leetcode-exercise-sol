// Use memoization function to calculate factorial

function factorial(n){
    const cache = {}

    if (cache[n]) {
        return cache[n]
    }

    if (n===0 || n===1) {
        return 1
    }
    else{
        return n * factorial(n-1)
    }

    // store the result in cache for future use

    cache[n] = result

    return result

}
const n = 5
 const res = factorial(n)
 console.log(`Factorial of ${n}: ` , res)