// leetcode two sum solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const myObject = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (myObject.hasOwnProperty(complement)) {
        return [myObject[complement], i];
      }
      myObject[nums[i]] = i;
    }
  };


  //maximum consecutive ones solution leetcode
  /**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = function (A, K) {
    let i = 0
    let j = 0
    const len = A.length
    while (j < len) {
      if (A[j] === 0) K--
      if (K < 0) {
        if (A[i] === 0) K++
        i++
      }
      j++
    }
    return j - i
  }