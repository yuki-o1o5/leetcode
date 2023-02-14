//https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

/**;
 * @param {number[]} nums
 * @return {number}
 */

// var singleNumber = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - 1; j++) {
//       if (nums[i] != nums[j]) {
//         return nums[i];
//       }
//     }
//   }
// };

// singleNumber([2, 2, 1]);

var singleNumber = function (nums) {
  let map = {};
  let min = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      min = key;
    }
  }

  return min;
};

singleNumber([2, 2, 1]);
