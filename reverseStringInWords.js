// leetcode problem related to String

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

let s = "Let's take LeetCode contest"

var reverseWords = function(s) {
    let splitString = s.split(" ")
    let revString  = splitString.map(item=> [...item].reverse().join(""))
    return revString.join(" ")
};


console.log(reverseWords(s));