/*

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/


function numRevArray(givenNum){
    let arr = Array.from(String(givenNum), Number).reverse();
    console.log(arr);
}

let givenNum = 35231;
numRevArray(givenNum)