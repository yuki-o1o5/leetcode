// https://leetcode.com/problems/valid-parentheses/

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let tryArray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      tryArray.push(s[i]);
    } else if (
      s[i] == ")" &&
      tryArray.length !== 0 &&
      tryArray[tryArray.length - 1] == "("
    ) {
      tryArray.pop();
    } else if (
      s[i] == "}" &&
      tryArray.length !== 0 &&
      tryArray[tryArray.length - 1] == "{"
    ) {
      tryArray.pop();
    } else if (
      s[i] == "]" &&
      tryArray.length !== 0 &&
      tryArray[tryArray.length - 1] == "["
    ) {
      tryArray.pop();
    } else {
      return false;
    }
  }
  return tryArray.length == 0;
};

isValid("(){}}{");

var isValid = function (s) {
  // Stack to store left symbols
  const leftSymbols = [];
  // Loop for each character of the string
  for (let i = 0; i < s.length; i++) {
    // If left symbol is encountered
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftSymbols.push(s[i]);
    }
    // If right symbol is encountered
    else if (
      s[i] === ")" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "("
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "}" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "{"
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "]" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "["
    ) {
      leftSymbols.pop();
    }
    // If none of the valid symbols is encountered
    else {
      return false;
    }
  }
  return leftSymbols.length === 0;
};
