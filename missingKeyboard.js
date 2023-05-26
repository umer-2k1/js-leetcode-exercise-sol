// leetcode Question related to string and Array
/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

. the first row consists of the characters "qwertyuiop",
. the second row consists of the characters "asdfghjkl", and
. the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]

*/

function wordInRow(words){
    const keyboard_rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    let checkRow = words.filter((val)=>{
        const lowercaseWord = val.toLowerCase()
        // console.log(lowercaseWord)
        const rows = keyboard_rows.find((rowValue)=>{
           return lowercaseWord.split('').every(char=> rowValue.includes(char))
        })
        return rows !== undefined;
    })
    return checkRow
}
const words = ["Hello","Alaska","Dad","Peace", "F"];

console.log(wordInRow(words))
