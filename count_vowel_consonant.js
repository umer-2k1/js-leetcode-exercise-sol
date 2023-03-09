// Count the number of vowels and consonants in string
let mystr= "find the total cOunt of VOWEL and CONSONANT"

// method1: using regular expression (RegEx)

let countVowel = /[aeiou]/gi
let countConsonant = /[^aeiou]/gi
// The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string
console.log(`Vowel count: ${mystr.match(countVowel).length}`)
console.log(`Consonant count: ${mystr.match(countConsonant).length}`)

// method2: using for of loop
