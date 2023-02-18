// https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let newString = "";
  if (strs == null || strs.length == 0) {
    return newString;
  }
  let minimumLength = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length);
  }
  // console.log(minimumLength)

  for (let i = 0; i < minimumLength; i++) {
    let current = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return newString;
      }
    }
    newString += current;
  }
  return newString;
};

longestCommonPrefix(["flower", "flow", "flight"]);
