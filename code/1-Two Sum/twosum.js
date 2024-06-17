/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/


class Solution {
    constructor(nums, target) {
        this.nums = nums;
        this.target = target;
    }
    bruteForce() {
        for (let i =0; i < this.nums.length - 1; i++) {
            for (let j = i+1; j < this.nums.length;  j++ ) {
                if (this.nums[i] + this.nums [j] === this.target) {
                    return [i,j];
                }
            }
        }
    }
    hashMap() {
        // complement = target - nums[i]
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return[map.get(complement),i];
        }
        map.set(nums[i],i);
        }
    }
    twoPointer() {
        let indexedNums = nums.map((num, index) => ({num, index}));
        indexedNums.sort((a,b) => a.num - b.num);

        // initialize two pointer
        let left = 0;
        let right = indexedNums.length - 1;

        while (left < right) {
         let leftNum = indexedNums[left].num;
         let rightNum = indexedNums[right].num;
         let currentSum = leftNum + rightNum;

         if (currentSum === target) {
             return [indexedNums[left].index, indexedNums[right].index];
         }
         else if (currentSum < target) {
             left ++;
         }
         else {
             right--;
         }
        }
    }

}

let nums = [3,2,4];
let target = 6;
solution = new Solution(nums, target);
console.log(solution.hashMap());  // Output: [0, 1]