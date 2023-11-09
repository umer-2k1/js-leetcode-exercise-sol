/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

const searchRange = function(nums, target) {
   let firstIndex = -1
   let lastIndex = -1
   
    if (nums.length===0) {
    return [-1,-1]
   }
    firstIndex = nums.indexOf(target)
    if (firstIndex!==-1) {
        lastIndex = nums.lastIndexOf(target)
    }
    else{
        return [-1,-1]
    }

return [firstIndex, lastIndex]
};

let nums = [5,7,7,8,8,10]
let target = 0

console.log(searchRange(nums, target));