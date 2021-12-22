/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

const twoSumOther = function (nums, target){
  const comp = {}
  for(let i = 0; i < nums.length; i++ ) {
    if(comp[nums[i]] >= 0) {
      return [comp[nums[i]],  i]
    }
    comp[target-nums[i]]  = i
  }
}

const numbers = [2, 7, 11, 15];
const numbers2 = [3,2,4];
const numbers3 = [3,3];
const target1 = 9
const target2 = 6
const target3 = 6
const result1 = twoSumOther(numbers, target1)
const result2 = twoSumOther(numbers2, target2)
const result3 = twoSumOther(numbers3, target3)
console.log('result1', result1)
console.log('result2', result2)
console.log('result3', result3)