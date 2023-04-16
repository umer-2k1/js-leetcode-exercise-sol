// leetcode problem related to array

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// First approach having time complexity O(n^2)
var twoSum = function(nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                arr.push(i)
                arr.push(j)
                console.log("arr", arr)
                return arr
            }
        }
    }
};
  
// Optimized solution having time complexity O(n)
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  };
  

// let nums = [2,7,11,15]
// let target = 9
let nums = [3,2,4,3,2,6,8]
let target = 12


console.log(twoSum(nums,target))